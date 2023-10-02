import UserForm from "@/app/components/UserForm";
import {notFound} from "next/navigation";
import Contact from "@/lib/types";
import React from "react";

interface Props {
  params: {
    id: number;
  };
}

const Edit = async ({params: {id}}: Props) => {
  const baseUrl = process.env.BASE_URL;

  const res = await fetch(`${baseUrl}/api/users/${id}`);
  const userInfo: Contact = await res.json();

  if (!userInfo.id) notFound();

  return (
    <>
      <div className="card-body">
        <h2 className="card-title">Edit {userInfo.userName} information</h2>
        <UserForm userInfo={userInfo} />
      </div>
    </>
  );
};

export default Edit;
