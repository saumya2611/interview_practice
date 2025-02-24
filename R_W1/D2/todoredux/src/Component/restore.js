import React, { useState } from "react";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { restoreData } from "../Redux/Action";

export const RestoreData = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className="mt-5">
      <div className="flex gap-1">
        <div className="border border-zinc-300 px-3 py-1 w-[300px] text-left rounded-sm">
          {item.value}
        </div>

        <Button
          className={`px-4 py-1  bg-lime-600 hover:bg-lime-500 text-white rounded-sm`}
          title={`Restore`}
          onClick={() => dispatch(restoreData(item))}
        />
      </div>
    </div>
  );
};
