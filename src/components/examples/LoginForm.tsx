import { useState } from "react";

export default function LoginForm() {
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  // const [login, setLogin] = useState("로그인 성공");
  const [confirm, setConfirm] = useState(false);
  const handleLogin = () => {
    alert(`아이디 : ${id} | 비밀번호: ${password}`);
    setConfirm(true);
  };

  return (
    <>
      <input
        value={confirm ? "" : id}
        onChange={(e) => setId(e.target.value)}
        placeholder="아이디를 입력하세요"
        className="w-50 bg-white text-black px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        value={confirm ? "" : password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="비밀번호를 입력하세요"
        className="w-50 bg-white text-black px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button onClick={handleLogin} className="ml-5">
        로그인
      </button>
    </>
  );
}
