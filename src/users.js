import { useEffect, useState } from "react";
import axios from "axios";
import { User } from "./user";

export const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://reqres.in/api/users")
      .then(function ({ data: { data } }) {
        setUsers(data);
      });
  }, []);

  return users.map((user) => (
    <div key={user.id}>
      <User user={user} />
    </div>
  ));
};
