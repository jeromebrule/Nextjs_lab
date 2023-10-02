import React from "react";
import UserTable from "./UserTable";
import Link from "next/link";

const UsersPage = () => {
  return (
    <>
      <h1 className="mb-5">Contacts</h1>
      <div className="flex">
        <Link href="/users/new" className="btn btn-primary">
          Create contact
        </Link>
        <div className="form-control ml-3 flex-grow-1">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-auto"
          />
        </div>
      </div>

      <div className="divider"></div>
      <UserTable />
    </>
  );
};

export default UsersPage;
