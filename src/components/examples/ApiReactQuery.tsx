import { useQuery } from "@tanstack/react-query";
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

export default function ApiReactQuery() {
  // const [userList, setUserList] = useState<User[]>([]);
  const { isLoading, data, isError } = useQuery<User[]>({
    queryKey: ["userList"], // 쿼리의 고유 이름
    queryFn: async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        return response.data;
      } catch (error) {
        console.log(error);
      }
    },
  });
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>ERROR!</div>;

  return (
    <>
      <ul>
        {data?.map((user) => (
          <li key={user.id}>
            Name: {user.name} / Username: {user.username} / Email: {user.email}{" "}
            / City: {user.address.city}
          </li>
        ))}
      </ul>
    </>
  );
}
