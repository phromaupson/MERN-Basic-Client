import React, { useState } from "react";
import { toast } from "react-toastify";

//Functions
import { registerHandler } from "../../functions/auth";

function Register({ history }) {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    password2: "",
  });

  const [loading, setLoading] = useState(false);

  const { name, password, password2 } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    if (password !== password2) {
      console.log("no match");
    } else {
      //
      const newUser = {
        name,
        password,
      };
      registerHandler(newUser)
        .then((res) => {
          setLoading(false);
          toast.success("Register Complete");
          history.push("/");
        })
        .catch((err) => {
          setLoading(false);
          toast.error(err.response.data.msg);
        });
    }
  };

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          {!loading ? <h1>Register</h1> : <h1>Loading...</h1>}
          <form onSubmit={(e) => onSubmit(e)}>
            <input
              className="form-control"
              type="text"
              name="name"
              autoFocus
              placeholder="Username"
              onChange={(e) => onChange(e)}
            />
            <input
              className="form-control"
              type="password"
              name="password"
              autoFocus
              placeholder="password"
              onChange={(e) => onChange(e)}
            />
            <input
              className="form-control"
              type="password"
              name="password2"
              autoFocus
              placeholder="Comfirm Password"
              onChange={(e) => onChange(e)}
            />
            <button className="btn btn-success" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
