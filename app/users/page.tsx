"use client";

import React from "react";
import UserTable from "./UserTable";
import Link from "next/link";

interface Props {
  searchParams: {sortOrder: string};
}

const UsersPage = ({searchParams: {sortOrder}}: Props) => {
  return (
    <>
      <h1>Contacts</h1>
      <Link href="/users/new" className="btn">
        Create contact
      </Link>
      <UserTable sortOrder={sortOrder} />
    </>
  );
};

export default UsersPage;
