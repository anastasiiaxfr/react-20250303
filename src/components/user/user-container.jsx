"use client";

import { use } from "react";
import { UsersContext } from "../users-context";
import { User } from "./user";

export const UserContainer = ({ id }) => {
  const users = use(UsersContext);

  const user = users.find(({ id: userId }) => userId === id);

  if (!user?.name) {
    return null;
  }

  return <User name={user.name} />;
};
