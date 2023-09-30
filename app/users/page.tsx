"use client";

import React, {useState} from "react";
import UserTable from "./UserTable";
import Link from "next/link";
import Modal from "../components/Modal";

interface Props {
  searchParams: {sortOrder: string};
}

const UsersPage = ({searchParams: {sortOrder}}: Props) => {
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow((open) => !open);

  return (
    <>
      <h1>Users</h1>
      <Link href="/users/new" className="btn">
        Create contact
      </Link>
      <button onClick={handleToggle}>test</button>
      <UserTable sortOrder={sortOrder} />
      <Modal show={show}>
        this is a modal
        <button className="btn btn-primary" onClick={handleToggle}>
          Yay!
        </button>
      </Modal>
    </>
  );
};

export default UsersPage;
