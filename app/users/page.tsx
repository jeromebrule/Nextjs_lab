"use client";

import {useEffect, useState} from "react";
import UserTable from "./UserTable";
import Link from "next/link";

const UsersPage = () => {
  const [usersInfo, setUsersInfo] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const query = await fetch("/api/users/");
      const response = await query.json();
      setUsersInfo(response);
    };
    getData();
  }, []);

  const handleSearch = (e: any) => {
    const query = e.target.value;
    fetch("/api/users/search", {
      method: "POST",
      body: JSON.stringify({userName: query}),
    })
      .then(async function (response) {
        const res: any = await response.json();
        setUsersInfo(res);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <h1 className="mb-5">Contacts</h1>
      <div className="flex">
        <Link href="/users/new" className="btn btn-primary">
          Create contact
        </Link>
        {/* <Search usersInfo={usersInfo} /> */}
        <div className="form-control ml-3 grow">
          <form>
            <div className="join w-full">
              <input
                type="text"
                placeholder="Search"
                className="input input-bordered w-full"
                onChange={handleSearch}
              />
              {/* <button className="btn join-item">search</button> */}
            </div>
          </form>
        </div>
      </div>

      <div className="divider"></div>
      <UserTable usersInfo={usersInfo} />
    </>
  );
};

export default UsersPage;
