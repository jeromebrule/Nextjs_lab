import React from "react";
import Link from "next/link";
import {sort} from "fast-sort";

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

const UserTable = async ({sortOrder}: Props) => {
  const res = await fetch("http://localhost:3000/api/users");
  const users: Contact[] = await res.json();

  const sortedUsers = sort(users).asc(
    sortOrder === "email" ? (user) => user.userEmail : (user) => user.userName
  );

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>
            <Link href="/users?sortOrder=name">Name</Link>
          </th>
          <th>Phone</th>
          <th>
            <Link href="/users?sortOrder=email">Email</Link>
          </th>
          <th>Website</th>
          <th>Company Name</th>
        </tr>
      </thead>
      <tbody>
        {sortedUsers.map((user) => (
          <tr key={user.id}>
            <td>
              <Link href={`/users/${encodeURIComponent(user.id)}`}>
                {user.userName}
              </Link>
            </td>
            <td>{user.userPhone}</td>
            <td>{user.userEmail}</td>
            <td>{user.userWebsite}</td>
            <td>{user.userCompanyName}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
