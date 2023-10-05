"use client";

import React from "react";
import UserForm from "@/app/components/UserForm";

const NewUserForm = () => {
  return (
    <>
      <div className="card-body">
        <h2 className="card-title">Create new contact</h2>
        <UserForm />
      </div>
    </>
  );
};

export default NewUserForm;
