"use client";
import { useGlobalContext } from "../../../context/GlobalContext";

const LoginPage = () => {
  const { setIsLogin } = useGlobalContext();
  const login = () => {
    console.log("You are Log in Now");
    setIsLogin(true);
  };
  return (
    <div>
      <button onClick={login}>Log in</button>
    </div>
  );
};

export default LoginPage;
