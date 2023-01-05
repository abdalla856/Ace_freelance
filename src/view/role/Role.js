import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "../../actions/usersActions";
import { useCookies } from "react-cookie";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import "./Role.css";
const Role = () => {
  const [cookies, setCookie] = useCookies(["user"]);
  const navigate = useNavigate();
  const { id } = useParams();
  const [selected, setSelected] = useState(null);
  const [date, setDate] = useState(null);
  const [alert, setAlert] = useState({ show: false, type: "", msg: "" });
  const dispatch = useDispatch();
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert({ show: true, type: "", msg: "" });
    }, 3000);
    return () => clearTimeout(timeout);
  });

  const dateHandler = (e) => {
    const newDate = new Date(e.target.value);
    console.log(newDate);
    setDate(newDate);
  };
  console.log(selected, date);
  const submitHandler = async (e) => {
    e.preventDefault();
    if (selected === null || date === null) {
      setAlert({ show: true, type: "warning", msg: "Please Enter value" });
    } else {
      const res = await dispatch(updateUser(id, date, selected));
      setCookie(
        "user",
        JSON.stringify({
          type: res.type,
          userId: res.id,
          token: res.token,
          name: res.name,
        })
      );

      navigate('../')
      window.location.reload();
    }
  };

  return (
    <div className="role">
      <form onSubmit={submitHandler}>
        {alert.show && alert.type === "warning" && (
          <p className={alert.type}>{alert.msg}</p>
        )}
        {alert.show && alert.type === "success" && (
          <p className={alert.type}>{alert.msg}</p>
        )}

        <select onChange={(e) => setSelected(e.target.value)}>
          <option selected disabled>
            Choose The Role
          </option>
          <option value="Student">Student</option>
          <option value="Customer">Customer</option>
        </select>
        <input type="date" onChange={dateHandler} />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Role;
