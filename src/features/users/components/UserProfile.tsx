import React from "react";
import { User } from "../types";

interface Props {
  user: User;
}

const UserProfile: React.FC<Props> = ({ user }) => {
  return (
    <div>
      <h1>Hello, {user.username}</h1>
    </div>
  );
};

export default UserProfile;
