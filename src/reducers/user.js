import { useCookies } from "react-cookie";

const Users = (users = [], action) => {
  // const [cookies, setCookie] = useCookies(["user"]);
  switch (action.type) {
    case "FETCH":
      return action.payload;
    case "AUTH":
      // setCookie(
      //   "user",
      //   JSON.stringify({
      //     type: action.payload.type,
      //     userId: action.payload.id,
      //     token: action.payload.token,
      //     name : action.payload.name
      //   })
      // );
      // return [...users, action.payload];
    case "UPLOAD":
      return [...users, action.payload];
    case "LOGIN":
      return action.payload;
    case "SIGNUP":
      return action.payload;
    default:
      return users;
  }
};
export default Users;
