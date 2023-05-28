import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button className="text-xs md:text-sm lg:text-md bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 md:py-2 lg:px-4 rounded-full"  onClick={() => loginWithRedirect()}>Log In</button>;
};

export default LoginButton;