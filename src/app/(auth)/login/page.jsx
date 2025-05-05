"use client";
import { useRouter } from "next/navigation";
import { useGlobalContext } from "../../../context/GlobalContext";
import { setCookie } from "../../../utils/cookies";

const LoginPage = () => {
  const router = useRouter();

  const { setIsLogin } = useGlobalContext();

  const login = () => {
    console.log("You are Log in Now");
    setCookie("demot", "DeepakMaury");
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
