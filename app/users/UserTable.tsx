"use client";

import Link from "next/link";
import {useSession} from "next-auth/react";
import type {GetServerSideProps} from "next";
import {useEffect, useState} from "react";
import {RiDeleteBin5Line, RiEdit2Line} from "react-icons/ri";

interface Contact {
  id: number;
  userName: string;
  userEmail: string;
  userPhone: string;
  userWebsite: string;
  userCompanyName: string;
}

const UserTable = () => {
  const {data: session, status} = useSession();

  const [usersInfo, setUsersInfo] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const query = await fetch("http://localhost:3000/api/users/");
      const response = await query.json();
      setUsersInfo(response);
    };
    getData();
  }, []);

  return (
    <>
      <h1>Hello World</h1>
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
          {usersInfo.map((user: any) => (
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
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UserTable;
