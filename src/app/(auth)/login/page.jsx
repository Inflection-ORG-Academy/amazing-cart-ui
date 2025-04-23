"use client";
import { useRouter } from "next/navigation";
import { useGlobalContext } from "../../../context/GlobalContext";

const LoginPage = () => {
  const router = useRouter();

  const { setIsLogin } = useGlobalContext();

  const login = () => {
    console.log("You are Log in Now");
    setIsLogin(true);
    router.push("/shop");
  };
  return (
    <div>
      <button onClick={login}>Log in</button>
    </div>
  );
};

export default LoginPage;
