import PaymentSuccess from "@/app/payment/success/page";
import { useGetTicketsQuery } from "@/redux/api/paymentApi";
import { SearchOutlined } from "@ant-design/icons";
import type { InputRef, TableColumnsType, TableColumnType } from "antd";
import { Button, Input, Modal, Space, Table } from "antd";
import type { FilterDropdownProps } from "antd/es/table/interface";
import { useRef, useState } from "react";
import Highlighter from "react-highlight-words";
import './../../../payment/success/success.css';

interface DataType {
  eventName: string;
  address: string;
  ticket_number: string;
  total_price: number;
  sit_qty: number;
  venueName: string;
}

type DataIndex = keyof DataType;

const UsersTickets = () => {
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef<InputRef>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [ticketData, setTicketData] = useState({});

  const { data, error, isLoading } = useGetTicketsQuery(undefined);

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
      <div
        style={{ padding: 8, width: "250px" }}
        onKeyDown={(e) => e.stopPropagation()}
      >
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
      key: "event_name",
      dataIndex: "event_id",
      width: 200,
      render: (event_id) => `${event_id?.title}`,
    },
    {
      title: "Event Address",
      key: "address",
      dataIndex: "event_id",
      width: 200,
      render: (event_id) => `${event_id?.address}`,
    },
    {
      title: "Event venue",
      key: "venue",
      dataIndex: "event_id",
      width: 200,
      render: (event_id) => `${event_id?.venue_name}`,
    },
    {
      title: "Token Number",
      key: "token",
      dataIndex: "ticket_number",
      width: 200,
      ...getColumnSearchProps("ticket_number"),
    },
    {
      title: "Ticket Quantity",
      dataIndex: "sit_qty",
      key: "sit_qty",
      width: 200,
      // ...getColumnSearchProps("sit_qty"),
    },
    {
      title: "Total Price",
      dataIndex: "total_price",
      key: "total_price",
      width: 200,
      // ...getColumnSearchProps("total_price"),
    },
    {
      title: "Download Ticket",
      key: "download",
      width: 200,
      fixed: "right",
      render: (text, record) => (
        <Button style={{padding:"0px 10px"}} type="primary" onClick={() => handleDownload(record)}>
          Download Ticket
        </Button>
      ),
    },
  ];

  const handleCloseModal = (data: any) => {
    setIsModalVisible(false);
    setTicketData({});
  };

  const handleDownload = (record: DataType) => {
    setTicketData(record);
    setIsModalVisible(true);
  };

  return (
    <div>
      <Table
        scroll={{ x: 1200, y: 400 }}
        columns={columns}
        dataSource={data?.data}
      />

      <Modal
        title="Ticket Details"
        open={isModalVisible}
        onCancel={handleCloseModal}
        footer={null}
        width={700}
        centered
      >
        <PaymentSuccess ticketData={ticketData}></PaymentSuccess>
      </Modal>
    </div>
  );
};

export default UsersTickets;
