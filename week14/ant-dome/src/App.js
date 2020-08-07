import React from "react";
import { Button, Breadcrumb, Table } from "antd";
import "./App.less";
const dataSource = [
    {
        key: "1",
        name: "胡彦斌",
        age: 32,
        address: "西湖区湖底公园1号",
    },
    {
        key: "2",
        name: "胡彦祖",
        age: 42,
        address: "西湖区湖底公园1号",
    },
];

const columns = [
    {
        title: "姓名",
        dataIndex: "name",
        key: "name",
    },
    {
        title: "年龄",
        dataIndex: "age",
        key: "age",
    },
    {
        title: "住址",
        dataIndex: "address",
        key: "address",
    },
];
const App = () => (
    <div className="App">
        <Button type="primary" size="small">
            Button
        </Button>
        <Button type="successful">button</Button>
        <Breadcrumb separator=">">
            <Breadcrumb.Item>北京</Breadcrumb.Item>
            <Breadcrumb.Item href="">昌平区</Breadcrumb.Item>
            <Breadcrumb.Item href="">回龙观</Breadcrumb.Item>
            <Breadcrumb.Item>珠峰培训</Breadcrumb.Item>
        </Breadcrumb>
        <Table dataSource={dataSource} columns={columns} />;
    </div>
);

export default App;
