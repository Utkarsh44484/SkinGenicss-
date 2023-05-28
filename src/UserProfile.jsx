import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div className="  ">
        <img className="rounded-full h-9 w-9 mb-1" src={user.picture} alt={user.name} />
        <h2  className="text-sm font-Adventpro text-gray-600">Welcome,</h2>
        {/* <h2 className="text-sm">{user.name.split(" ")[0]}</h2> */}
        <h2 className="text-sm font-Adventpro  text-gray-600 font-semibold">{user.nickname}</h2>

         
      </div>
    )
  );
};

export default Profile;