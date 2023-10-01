import UserForm from "@/app/components/UserForm";
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

const Edit = async ({params: {id}}: Props) => {
  const res = await fetch(`http://localhost:3000/api/users/${id}`);
  const user: Contact = await res.json();

  if (!user.id) notFound();

  return (
    <>
      <div className="card-body">
        <h2 className="card-title">Edit {user.userName} information</h2>
        <UserForm user={user} />
      </div>
    </>
  );
};

export default Edit;
