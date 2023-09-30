import {notFound} from "next/navigation";
import React from "react";

interface Props {
  params: {
    id: number;
  };
}

interface Contact {
  id: number;
  userName: string;
  userEmail: string;
  userPhone: string;
  userWebsite: string;
  userCompanyName: string;
}

const UserDetailPage = async ({params: {id}}: Props) => {
  const res = await fetch(`http://localhost:3000/api/users/${id}`);
  const user: Contact = await res.json();

  if (!user.id) notFound();

  return (
    <>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{user.userName}</h2>
          <ul>
            <li>{user.userEmail}</li>
            <li>{user.userPhone}</li>
            <li>{user.userWebsite}</li>
            <li>{user.userCompanyName}</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default UserDetailPage;
