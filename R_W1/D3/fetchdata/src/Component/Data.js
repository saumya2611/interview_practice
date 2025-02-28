import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";

const Data = () => {
  const [fetchData, setFetchData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const navigate = useNavigate();

  const goToUserProfile = (id) => {
    navigate(`/user/${id}`);
  };

  async function data() {
    try {
      const fetchApi = await axios(
        `https://jsonplaceholder.typicode.com/posts`
      );
      //   console.log("fetchApi------->", );
      setFetchData(fetchApi.data);
      setFilterData(fetchApi.data);
    } catch (error) {
      console.log("something went wrong");
    }
  }

  const deleteData = (userId) => {
    console.log("userId-------->", userId);
    // console.log("filterData------->", filterData);

    const deleteItem = filterData.filter((item) => {
      return item.id != userId;
    });
    setFilterData(deleteItem);
    console.log("deleteItem-------->", deleteItem);
  };

  useEffect(() => {
    data();
  }, []);
  return (
    <div>
      <table>
        <thead className="border border-black">
          <tr>
            <th className="px-5 py-2">ID</th>
            <th className="px-5 py-2">TITLE</th>
            <th className="px-5 py-2">BODY</th>
            <th className="px-5 py-2">Delete</th>
            <th className="px-5 py-2">Edit</th>
          </tr>
        </thead>
        <tbody>
          {filterData.map((item) => {
            return (
              <tr key={item.id}>
                <td className="p-[2rem] border border-slate-950"> {item.id}</td>
                <td className="p-[2rem] border border-slate-950 w-[400px]">
                  {item.title}
                </td>
                <td className="px-5  py-[1.5rem]  border border-slate-950 w-[400px]">
                  {item.body}
                </td>
                <td className="px-5  py-[1.5rem]  border border-slate-950 w-[400px]">
                  <Button
                    title={`Delete`}
                    className={`bg-red-500 hover:bg-red-400 px-5 py-2 rounded-sm text-white`}
                    onClick={() => deleteData(item.id)}
                  />
                </td>
                <td className="px-5  py-[1.5rem]  border border-slate-950 w-[400px]">
                  <Link to={`/edit/${item.id}`} state={item}>
                    <Button
                      title={`Edit`}
                      className={`bg-green-500 hover:bg-green-400 px-5 py-2 rounded-sm text-white`}
                      onClick={() => goToUserProfile(item.id)}
                    />
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Data;
