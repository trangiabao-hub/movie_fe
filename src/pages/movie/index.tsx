import {
  AutoComplete,
  Avatar,
  Button,
  DatePicker,
  Form,
  Input,
  Modal,
  Select,
  Table,
} from "antd";
import { useForm } from "antd/es/form/Form";
import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import { Information } from "../../models/information";

const Movie: FC = () => {
  const [dataSource, setDataSource] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [releaseDate, setReleaseDate] = useState<any>();
  const [director, setDerector] = useState<Information>();
  const [form] = useForm();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    form.submit();
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (value: string) => {
        return (
          <Avatar
            size={150}
            shape="square"
            src={<img src={value} alt={value} />}
          />
        );
      },
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
  ];

  useEffect(() => {
    // async await

    const fetchMovie = async () => {
      // lấy movie từ BE
      try {
        const response = await axios.get("http://localhost:8080/movie");
        setDataSource(response.data);
      } catch (e) {
        console.log(e);
      }
    };

    fetchMovie();
  }, []);

  const options: Information[] = [
    {
      name: "Burns Bay Road",
      id: 1,
    },
    {
      name: "Downing Street",
      id: 1,
    },
    {
      name: "Wall Street",
      id: 1,
    },
  ];

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <Button type="primary" onClick={showModal}>
        New Movie
      </Button>
      <Table dataSource={dataSource} columns={columns} />

      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          form={form}
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Name"
            labelAlign="left"
            name="name"
            rules={[{ required: true, message: "Please input name!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Image"
            labelAlign="left"
            name="image"
            rules={[{ required: true, message: "Please input image!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Release Date"
            labelAlign="left"
            name="releaseDate"
            rules={[{ required: true, message: "Please input release date!" }]}
          >
            <DatePicker
              value={releaseDate}
              onChange={(newValue) => {
                setReleaseDate(newValue);
              }}
              format={"DD/MM/YYYY"}
            />
          </Form.Item>

          <Form.Item
            label="Director"
            labelAlign="left"
            name="director"
            rules={[{ required: true, message: "Please input director!" }]}
          >
            <Select
              showSearch
              placeholder="Select a person"
              optionFilterProp="children"
              filterOption={(input, option) =>
                (option?.label ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              options={[
                {
                  value: 1,
                  label: "Jack",
                },
                {
                  value: 2,
                  label: "Lucy",
                },
                {
                  value: 3,
                  label: "Tom",
                },
              ]}
            />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Movie;
