import { useCookies } from "react-cookie";

const Users = (users = [], action) => {
  switch (action.type) {
    case "FETCH":
      return action.payload;
    case "DELETE_USER":
      const id = action.payload;

      users = users.filter((user) => user.id !== id);
      return users;
    case "Update_User":
      // cons
      const newState = [...users]
      newState[newState.findIndex((user) => user.id === action.payload.id)].role =
        action.payload.type;
        
      return newState;
    case "LOGIN":
      return action.payload;
    case "SIGNUP":
      return action.payload;
    default:
      return users;
  }
};
export default Users;
