"use client";

import {useEffect, useState} from "react";
import {notFound} from "next/navigation";
import {Contact} from "../../../lib/types";
import React from "react";

interface Props {
  params: {
    id: number;
  };
}

const UserDetailPage = ({params: {id}}: Props) => {
  const [userInfo, setUserInfo] = useState<Contact>([]);

  useEffect(() => {
    const getData = async () => {
      const query = await fetch(`http://localhost:3000/api/users/${id}`);
      const response = await query.json();
      setUserInfo(response);
    };
    getData();
  }, []);

  if (!userInfo) notFound();

  return (
    <>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{userInfo.userName}</h2>
          <ul>
            <li>{userInfo.userEmail}</li>
            <li>{userInfo.userPhone}</li>
            <li>{userInfo.userWebsite}</li>
            <li>{userInfo.userCompanyName}</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default UserDetailPage;
