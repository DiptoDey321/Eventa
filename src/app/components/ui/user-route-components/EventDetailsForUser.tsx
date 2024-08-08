import React, { useRef, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import type { InputRef, TableColumnsType, TableColumnType } from "antd";
import { Button, Input, Space, Table } from "antd";
import type { FilterDropdownProps } from "antd/es/table/interface";
import Highlighter from "react-highlight-words";
import { DeleteOutlined } from "@ant-design/icons";

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
}

type DataIndex = keyof DataType;
const data: DataType[] = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "Joe Black",
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    key: "3",
    name: "Jim Green",
    age: 32,
    address: "Sydney No. 1 Lake Park",
  },
  {
    key: "4",
    name: "Jim Red",
    age: 32,
    address: "London No. 2 Lake Park",
  },
  {
    key: "5",
    name: "Jim Green",
    age: 32,
    address: "Sydney No. 1 Lake Park",
  },
  {
    key: "6",
    name: "Jim Red",
    age: 32,
    address: "London No. 2 Lake Park",
  },
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "Joe Black",
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    key: "3",
    name: "Jim Green",
    age: 32,
    address: "Sydney No. 1 Lake Park",
  },
  {
    key: "4",
    name: "Jim Red",
    age: 32,
    address: "London No. 2 Lake Park",
  },
  {
    key: "5",
    name: "Jim Green",
    age: 32,
    address: "Sydney No. 1 Lake Park",
  },
  {
    key: "6",
    name: "Jim Red",
    age: 32,
    address: "London No. 2 Lake Park",
  },
  {
    key: "7",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "8",
    name: "Joe Black",
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    key: "9",
    name: "Jim Green",
    age: 32,
    address: "Sydney No. 1 Lake Park",
  },
  {
    key: "10",
    name: "Jim Red",
    age: 32,
    address: "London No. 2 Lake Park",
  },
  {
    key: "11",
    name: "Jim Green",
    age: 32,
    address: "Sydney No. 1 Lake Park",
  },
  {
    key: "12",
    name: "Jim Red",
    age: 32,
    address: "London No. 2 Lake Park",
  },
  {
    key: "21",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "22",
    name: "Joe Black",
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    key: "23",
    name: "Jim Green",
    age: 32,
    address: "Sydney No. 1 Lake Park",
  },
  {
    key: "24",
    name: "Jim Red",
    age: 32,
    address: "London No. 2 Lake Park",
  },
  {
    key: "25",
    name: "Jim Green",
    age: 32,
    address: "Sydney No. 1 Lake Park",
  },
  {
    key: "26",
    name: "Jim Red",
    age: 32,
    address: "London No. 2 Lake Park",
  },
  {
    key: "31",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "32",
    name: "Joe Black",
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    key: "33",
    name: "Jim Green",
    age: 32,
    address: "Sydney No. 1 Lake Park",
  },
  {
    key: "34",
    name: "Jim Red",
    age: 32,
    address: "London No. 2 Lake Park",
  },
  {
    key: "35",
    name: "Jim Green",
    age: 32,
    address: "Sydney No. 1 Lake Park",
  },
  {
    key: "36",
    name: "Jim Red",
    age: 32,
    address: "London No. 2 Lake Park",
  },
  {
    key: "37",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "38",
    name: "Joe Black",
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    key: "39",
    name: "Jim Green",
    age: 32,
    address: "Sydney No. 1 Lake Park",
  },
  {
    key: "14",
    name: "Jim Red",
    age: 32,
    address: "London No. 2 Lake Park",
  },
  {
    key: "15",
    name: "Jim Green",
    age: 32,
    address: "Sydney No. 1 Lake Park",
  },
  {
    key: "16",
    name: "Jim Red",
    age: 32,
    address: "London No. 2 Lake Park",
  },
];


const EventDetailsForUser: React.FC = () => {
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef<InputRef>(null);


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
      title: "Organizer",
      dataIndex: "name",
      key: "name",
      width: "30%",
      ...getColumnSearchProps("name"),
    },
    {
      title: "Ticket Number",
      dataIndex: "age",
      key: "age",
      width: "20%",
      ...getColumnSearchProps("age"),
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      ...getColumnSearchProps("address"),
      sorter: (a, b) => a.address.length - b.address.length,
      sortDirections: ["descend", "ascend"],
    },
  ];

  return (
    <div>
      <div className="">
        <Table
          scroll={{ x: 1200, y: 400 }}
          columns={columns}
          dataSource={data}
        />
      </div>
    </div>
  );
};

export default EventDetailsForUser;