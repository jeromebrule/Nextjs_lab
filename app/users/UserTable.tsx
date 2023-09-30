import React, {useEffect, useState} from "react";
import Link from "next/link";
import {sort} from "fast-sort";
import {RiDeleteBin5Line, RiEdit2Line} from "react-icons/ri";

interface Contact {
  id: number;
  userName: string;
  userEmail: string;
  userPhone: string;
  userWebsite: string;
  userCompanyName: string;
}

interface ApiError {
  error: any;
}

interface Props {
  sortOrder: string;
}

const UserTable = ({sortOrder}: Props) => {
  const [users, setUsers] = useState<Contact[]>([]);
  const [error, setError] = useState<any>();

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/users/");
      // const response = await fetch("https://jsonplaceholder.typicode.com/404");
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

  // const sortedUsers = sort(users).asc(
  //   sortOrder === "email" ? (user) => user.userEmail : (user) => user.userName
  // );

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
          <th></th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
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
            <td>
              <RiDeleteBin5Line color="#ff6b81" size={20} />
              <RiEdit2Line color="#ff6b81" size={20} />
            </td>
          </tr>
        ))}
        {error && (
          <div className="toast toast-end">
            <div className="alert alert-error">
              <span>{error}</span>
            </div>
          </div>
        )}
      </tbody>
    </table>
  );
};

export default UserTable;
