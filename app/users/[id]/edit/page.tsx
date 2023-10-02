"use client";

import UserForm from "@/app/components/UserForm";
import {notFound} from "next/navigation";
import Contact from "@/lib/types";

interface Props {
  params: {
    id: number;
  };
}

const Edit = async ({params: {id}}: Props) => {
  const res = await fetch(`http://localhost:3000/api/users/${id}`);
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
