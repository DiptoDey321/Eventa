"use client"
import { useGetEventDetailsQuery, useGetEventsForUserQuery } from "@/redux/api/ticketsApi";
import { EditOutlined, SearchOutlined } from "@ant-design/icons";
import type { InputRef, TableColumnsType, TableColumnType } from "antd";
import { Button, Input, Modal, Space, Table } from "antd";
import type { FilterDropdownProps } from "antd/es/table/interface";
import React, { useRef, useState } from "react";
import Highlighter from "react-highlight-words";
import EventEdit from "./event -edit/EventEdit";

interface DataType {
  key: string;
  title: string;
  event_start_date_time: string;
  event_end_date_time: string;
  venue_name: string;
  address: string;
  event_status: string;
}

type DataIndex = keyof DataType;

const EventDetailsForUser: React.FC = () => {
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef<InputRef>(null);
  const { data, error, isLoading } = useGetEventsForUserQuery(undefined);
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  // const [eventData, setEventData] = useState({});
  const {
    data: eventDetails,
    error: eventDetailsError,
    isLoading: eventDetailsLoading,
  } = useGetEventDetailsQuery(selectedEventId as string, {
    skip: !selectedEventId,
  });
  
  const handleSearch = (
    selectedKeys: string[],
    confirm: FilterDropdownProps["confirm"],
    dataIndex: DataIndex
  ) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters: () => void) => {
    clearFilters();
    setSearchText("");
  };

  const getColumnSearchProps = (
    dataIndex: DataIndex
  ): TableColumnType<DataType> => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div style={{ padding: 8, width :"250px" }} onKeyDown={(e) => e.stopPropagation()}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() =>
            handleSearch(selectedKeys as string[], confirm, dataIndex)
          }
          style={{ marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() =>
              handleSearch(selectedKeys as string[], confirm, dataIndex)
            }
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered: boolean) => (
      <SearchOutlined style={{ color: filtered ? "#1677ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes((value as string).toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  const columns: TableColumnsType<DataType> = [
    {
      title: "Event Name",
      dataIndex: "title",
      key: "title",
      width: 200,
      ...getColumnSearchProps("title"),
    },

    {
      title: "start Date",
      dataIndex: "event_start_date_time",
      key: "event_start_date_time",
      width: 200,
      render: (text) => new Date(text).toLocaleString(),
    },

    {
      title: "End Date",
      dataIndex: "event_end_date_time",
      key: "event_end_date_time",
      width: 200,
      render: (text) => new Date(text).toLocaleString(),
    },

    {
      title: "Venue",
      dataIndex: "venue_name",
      key: "venue_name",
      width: 200,
    },

    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      width: 200,
    },

    {
      title: "Approved / Declined / Pending",
      dataIndex: "event_status",
      key: "event_status",
      ...getColumnSearchProps("event_status"),
      render: (text: string) => {
        let color = "red";
        let label = text;
        if (text === "Approved") {
          color = "green";
        } else if (text === "Declined") {
          color = "red";
        } else if (text === "Pending") {
          color = "orange";
        }
        return <span style={{ color }}>{label}</span>;
      },
    },
    {
      title: "Action",
      key: "action",
      width: 100,
      render: (_: any, record: any) => (
        <div onClick={() => handleEdit(record)} className="">
          <EditOutlined
          
          style={{ cursor: "pointer", color: "#1890ff" }}
        />
        <span style={{paddingLeft:"10px"}}>Edit</span>
        </div>
      ),
    },
  ];

  const handleEdit = (record: any) => {
    setSelectedEventId(record._id);
    setIsModalVisible(true);
  };

  const handleCloseModal = (data: any) => {
    setIsModalVisible(false);
  };

  console.log("event details",eventDetails?.data);
  

  

  return (
    <div>
      <div className="">
        <Table
          scroll={{ x: 1200, y: 400 }}
          columns={columns}
          dataSource={data?.data}
        />
      </div>

      <Modal
        title="Edit Event"
        open={isModalVisible}
        onCancel={handleCloseModal}
        footer={null}
        width={1000}
        centered
      >
        <EventEdit eventData={eventDetails?.data}></EventEdit>
      </Modal>
    </div>
  );
};

export default EventDetailsForUser;
