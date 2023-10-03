"use client";

import {useSession} from "next-auth/react";
import {useEffect, useState} from "react";
import {notFound} from "next/navigation";
import Contact from "@/lib/types";
import React from "react";
import Link from "next/link";

interface Props {
  params: {
    id: number;
  };
}

const UserDetailPage = ({params: {id}}: Props) => {
  const {data: session, status} = useSession();
  const [userInfo, setUserInfo] = useState<Contact>([]);

  useEffect(() => {
    const getData = async () => {
      const query = await fetch(`/api/users/${id}`);
      const response = await query.json();
      setUserInfo(response);
    };
    getData();
  }, []);

  if (!userInfo) notFound();

  return (
    <>
      <div className="card lg:card-side bg-base-100 shadow-xl flex flex-col">
        <div className="card-body">
          <h2 className="card-title">{userInfo.userName}</h2>
          <ul>
            <li>{userInfo.userEmail}</li>
            <li>{userInfo.userPhone}</li>
            <li>{userInfo.userWebsite}</li>
            <li>{userInfo.userCompanyName}</li>
          </ul>
          <div className="card-actions">
            {status === "authenticated" && (
              <Link
                href={`/users/${encodeURIComponent(userInfo.id)}/edit`}
                className="btn btn-primary"
              >
                Edit
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDetailPage;
