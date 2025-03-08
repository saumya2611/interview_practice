import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteData, fetchData, searchData, shorting } from "../Redux/action";

const Data = () => {
  const navigate = useNavigate();

  const currentState = useSelector((state) => {
    return state;
  });

  console.log("currentState-----------> Data file", currentState);

  const { order, orderName } = currentState.crudReducers;

  const dispatch = useDispatch();

  const goToUserProfile = (id) => {
    navigate(`/user/${id}`);
  };

  async function data() {
    try {
      const fetchApi = await axios(
        `https://jsonplaceholder.typicode.com/posts`
      );
      //   console.log("fetchApi------->", );

      dispatch(fetchData(fetchApi.data));
    } catch (error) {
      console.log("something went wrong");
    }
  }

  useEffect(() => {
    if (currentState.crudReducers.fetchData.length === 0) {
      data();
    }
  }, []);
  return (
    <div>
      <input
        type="search"
        className="border border-slate-200 px-3 py-1 focus:outline-none mt-3 mb-3 w-[500px] rounded-sm"
        value={currentState.crudReducers.searchedValue}
        onChange={(ev) => {
          dispatch(searchData(ev.target.value));
        }}
      />
      <div>
        <table>
          <thead className="border border-black">
            <tr>
              <th className="px-5 py-2">
                ID
                <Button
                  className={` bg-slate-400 px-2 text-white rounded-sm`}
                  onClick={() =>
                    dispatch(shorting(order === "" ? "asc" : order, "id"))
                  }
                  title={order === "asc" ? "dsc" : "asc"}
                />
              </th>
              <th className="px-5 py-2">TITLE</th>
              <th className="px-5 py-2">BODY</th>
              <th className="px-5 py-2">Delete</th>
              <th className="px-5 py-2">Edit</th>
            </tr>
          </thead>
          <tbody>
            {currentState.crudReducers.filterData.map((item) => {
              return (
                <tr key={item.id}>
                  <td className="p-[2rem] border border-slate-950">
                    {" "}
                    {item.id}
                  </td>
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
                      onClick={() => dispatch(deleteData(item.id))}
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
    </div>
  );
};

export default Data;
