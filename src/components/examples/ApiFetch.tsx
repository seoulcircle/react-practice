import { useState, useEffect } from "react";

interface User {
  name: string;
  email: string;
  username: string;
  id: number;
  address: {
    city: string;
  };
}

export default function ApitFetch() {
  const [userList, setUserList] = useState<User[]>([]);

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(); //  HTTP 에러(404, 500)는 따로 체크
        }
        return response.json();
      })
      .then((data: User[]) => {
        setUserList(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <ul>
        {userList.map((user) => (
          <li key={user.id}>
            Name : {user.name} / Email : {user.email} / Address :{" "}
            {user.address.city}
          </li>
        ))}
      </ul>
    </>
  );
}
