import React, { useState } from "react";
import AdminNav from "../../layout/AdminNav";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

import { createPerson } from "../../functions/person";

const AdminCreatePerson = () => {
  const { user } = useSelector((state) => ({ ...state }));

  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    createPerson(name, user.token)
      .then((res) => {
        console.log(res);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        toast.error(err.response);
      });
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <AdminNav />
        </div>
        <div>
          <h4>Admin CreatePerson</h4>

          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label>ชื่อ</label>
              <input
                type="text"
                className="form-control"
                autoFocus
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <button className="btn btn-outline-primary">Save</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminCreatePerson;
