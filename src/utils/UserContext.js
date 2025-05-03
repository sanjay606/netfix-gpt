import {createContext} from "react";

const UserContext = createContext({
logedInUser: "default user",
});
export default UserContext;