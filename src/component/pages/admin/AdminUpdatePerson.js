import React, { useState, useEffect } from "react";
import AdminNav from "../../layout/AdminNav";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { createPerson, getPersons } from "../../functions/person";

const AdminUpdatePerson = ({ history, match }) => {
  const { user } = useSelector((state) => ({ ...state }));

  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadPerson(match.params.id, user.token);
  }, []);

  const loadPerson = (id, authtoken) => {
    getPersons(id, authtoken)
      .then((res) => {
        setName(res.data.name);
      })
      .catch((err) => {
        toast.error(err);
        console.log(err);
      });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    createPerson(name, user.token)
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
                value={name}
                autoFocus
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <button className="btn btn-outline-primary">Save</button>
          </form>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default AdminUpdatePerson;
