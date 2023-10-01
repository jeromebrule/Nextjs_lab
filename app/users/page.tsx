import React from "react";
import UserTable from "./UserTable";
import Link from "next/link";

const UsersPage = () => {
  return (
    <>
      <h1 className="mb-5">Contacts</h1>
      <Link href="/users/new" className="btn btn-primary">
        Create contact
      </Link>
      <div className="divider"></div>
      <UserTable />
    </>
  );
};

export default UsersPage;
