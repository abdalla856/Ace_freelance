// import { useState, useCallback, useEffect } from "react";
// import { useCookies } from "react-cookie";
// import Cookies from "js-cookie";
// export const useAuth = () => {
//   const [token, setToken] = useState(false);
//   const [type, setType] = useState("");
//   const [userId, setUserId] = useState(false);

//   const [cookies, setCookie] = useCookies(["user"]);
//   const login = useCallback((uid, token, type,) => {
//     setToken(token);
//     setType(type);
//     setUserId(uid);

//     console.log("inside");
//     setCookie(
//       "user",
//       JSON.stringify({
//         type: type,
//         userId: uid,
//         token: token,
//       })
//     );
//   }, []);

//   useEffect(() => {
//     const storedData = JSON.parse(Cookies.get("user"));

//     if (storedData && storedData.token && storedData.type) {
//       login(
//         storedData.userId,
//         storedData.token,
//         storedData.type,
//         new Date(storedData.expiration)
//       );
//     } else {
//       console.log("err");
//     }
//   }, [login]);

//   const logout = useCallback(() => {
//     console.log("logout");
//     setToken(null);
    
//     setUserId(null);
//     setType(null);
//     Cookies.remove("user");
//   }, []);

//   return { token, type, login, logout, userId };
// };
