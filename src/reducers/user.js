const Users = (users = [], action) => {
    switch (action.type) {
      case "FETCH":
        return action.payload;
      // case "CREATE":
      //   return [...users, action.payload];
      case "UPLOAD":
        return [...users, action.payload];
      case "LOGIN":
        return action.payload;
      default:
        return users;
    }
  };
  export default Users