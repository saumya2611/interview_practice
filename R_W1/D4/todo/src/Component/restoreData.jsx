import React from "react";
import { useDispatch } from "react-redux";
import Button from "./Button";
import { restoreTodo } from "../Redux/action";

const RestoreData = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex gap-1 mt-0.5">
      <div className="border border-zinc-400 focus:outline-none px-3 py-1 rounded-sm w-[270px] text-left">
        {item.value}
      </div>
      <Button
        title={"Restore"}
        className={`rounded-sm bg-lime-600 hover:bg-lime-700 px-6 text-white`}
        onClick={() => dispatch(restoreTodo(item))}
      />
    </div>
  );
};

export default RestoreData;
