import React, { useState, useEffect } from "react";
import AdminNav from "../../layout/AdminNav";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Table, Tag, Space } from "antd";

import { createPerson, getPerson, removePerson } from "../../functions/person";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const AdminCreatePerson = () => {
  const { user } = useSelector((state) => ({ ...state }));

  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [person, setPerson] = useState([]);
  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("choose File");

  useEffect(() => {
    loadPerson(user.token);
  }, [user.token]);
  const loadPerson = (authtoken) => {
    getPerson(authtoken)
      .then((res) => {
        setPerson(res.data);
      })
      .catch((err) => {
        toast.error(err);
        console.log(err);
      });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const fromData = new FormData();
    fromData.append("file", file);
    fromData.append("data", name);
    createPerson(fromData, user.token)
      .then((res) => {
        loadPerson(user.token);
        setLoading(false);
        setName("");
        toast.success("Create " + res.data.name + " Success");
      })
      .catch((err) => {
        setLoading(false);
        toast.error(err.response);
      });
  };

  const handleRemove = (id) => {
    if (window.confirm("Are you sure Delete!")) {
      setLoading(true);
      removePerson(id, user.token)
        .then((res) => {
          loadPerson(user.token);
          setLoading(false);
          toast.success("Remove " + res.data.name + " Success");
        })
        .catch((err) => {
          setLoading(false);
          toast.error(err.response);
        });
    }
  };

  const columns = [
    {
      title: "ชื่อ",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Actions",
      render: (record) => (
        <>
          <span
            className="btn btn-sm float-right"
            onClick={() => handleRemove(record._id)}
          >
            <DeleteOutlined className="text-danger" />
          </span>
          <Link to={"/admin/update-person/" + record._id}>
            <span className="btn btn-sm float-right">
              <EditOutlined className="text-warning" />
            </span>
          </Link>
        </>
      ),
    },
  ];

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <AdminNav />
        </div>
        <div className="col">
          {loading ? <h4>Loading</h4> : <h4>Admin CreatePerson</h4>}
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label>ชื่อ</label>
              <input
                type="text"
                className="form-control"
                autoFocus
                required
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
            <div className="custom-file mb-4">
              <input
                type="file"
                className="custom-file-input"
                onChange={(e) => setFile(e.target.files[0])}
              />
              <label className="custom-file-label" htmlFor="customfile">
                {filename}
              </label>
            </div>
            <button className="btn btn-outline-primary">Save</button>
          </form>
          <hr />
          <Table columns={columns} dataSource={person} rowKey="_id" />
        </div>
      </div>
    </div>
  );
};

export default AdminCreatePerson;
