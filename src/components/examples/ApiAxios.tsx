import { useState, useEffect } from "react";
import axios from "axios";

interface User {
  name: string;
  email: string;
  username: string;
  id: number;
  address: {
    city: string;
  };
}

export default function ApiAxios() {
  const [userList, setUserList] = useState<User[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUserList(response.data); // 데이터 바로 사용 가능
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <ul>
        {userList.map((user) => (
          <li key={user.id}>
            Name: {user.name} / Username: {user.username} / Email: {user.email}{" "}
            / City: {user.address.city}
          </li>
        ))}
      </ul>
    </>
  );
}
