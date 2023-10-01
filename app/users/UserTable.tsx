"use client";

import React, {useEffect, useState} from "react";
import Link from "next/link";
import {sort} from "fast-sort";
import {RiDeleteBin5Line, RiEdit2Line} from "react-icons/ri";
import {useSession} from "next-auth/react";

interface Contact {
  id: number;
  userName: string;
  userEmail: string;
  userPhone: string;
  userWebsite: string;
  userCompanyName: string;
}
interface Props {
  sortOrder: string;
}

const UserTable = ({sortOrder}: Props) => {
  const {data: session, status} = useSession();

  const [users, setUsers] = useState<Contact[]>([]);
  const [error, setError] = useState<any>();
  const [apistatus, setapiStatus] = useState<any>();

  const fetchData = async () => {
    try {
      const response = await fetch("/api/users/");
      if (!response.ok) {
        throw new Error("Sorry something went wrong");
      }
      const data = await response.json();
      setUsers(data);
    } catch (error: any) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDeleteContact = (id: number) =>
    fetch(`/api/users/${id}`, {
      method: "DELETE",
    })
      .then(function (response) {
        fetchData();
        setapiStatus(response.status);
      })
      .catch(function (error) {
        console.log(error);
      });

  const sortedUsers = sort(users).asc(
    sortOrder === "email" ? (user) => user.userEmail : (user) => user.userName
  );

  return (
    <>
      <table className="table table-bordered table-auto">
        <thead>
          <tr className="hidden md:table-row">
            <th>
              <Link href="/users?sortOrder=name">Name</Link>
            </th>
            <th>Phone</th>
            <th>
              <Link href="/users?sortOrder=email">Email</Link>
            </th>
            <th>Website</th>
            <th>Company Name</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {sortedUsers.map((user) => (
            <tr key={user.id} className="tr-class">
              <td className="td-class">
                <Link href={`/users/${encodeURIComponent(user.id)}`}>
                  {user.userName}
                </Link>
              </td>
              <td className="td-class">{user.userPhone}</td>
              <td className="td-class">{user.userEmail}</td>
              <td className="td-class">{user.userWebsite}</td>
              <td className="td-class">{user.userCompanyName}</td>
              <td className="td-class">
                {status === "authenticated" && (
                  <>
                    <div
                      className="tooltip tooltip-info"
                      data-tip="edit contact"
                    >
                      <Link
                        href={`/users/${encodeURIComponent(user.id)}/edit`}
                        className="btn btn-circle btn-sm"
                      >
                        <RiEdit2Line color="#000" size={20} />
                      </Link>
                    </div>
                    <div
                      className="tooltip tooltip-error"
                      data-tip="delete contact"
                    >
                      <button
                        className="ml-3 btn btn-circle btn-sm"
                        onClick={() => handleDeleteContact(user.id)}
                      >
                        <RiDeleteBin5Line color="#000" size={20} />
                      </button>
                    </div>
                  </>
                )}
              </td>
            </tr>
          ))}
          {apistatus === 401 && (
            <div className="toast toast-end">
              <div className="alert alert-error">
                <span>Unauthorized.</span>
              </div>
            </div>
          )}
          {apistatus === 200 && (
            <div className="toast toast-end">
              <div className="alert alert-info">
                <span>Contact Deleted.</span>
              </div>
            </div>
          )}
          {error && (
            <div className="toast toast-end">
              <div className="alert alert-error">
                <span>{error}</span>
              </div>
            </div>
          )}
        </tbody>
      </table>
    </>
  );
};

export default UserTable;
