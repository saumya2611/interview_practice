import React, { useState } from "react";
import Button from "./Button";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
const EditData = () => {
  const { state } = useLocation();
  console.log("state----->", state);

  const [newValue, setNewValue] = useState(state.title);
  const { id } = useParams();
  return (
    <div className="flex items-center justify-center h-[50vh] ">
      <div className="flex gap-2">
        <input
          type="text"
          className="border border-slate-400 w-[800px] rounded-sm px-3 py-2 text-center"
          placeholder="Edit item"
          value={newValue}
          onChange={(ev) => setNewValue(ev.target.value)}
        />
        <Button
          title={`Edit`}
          className={`bg-green-500 hover:bg-green-400 px-5 py-1 rounded-sm text-white`}
        />
      </div>
    </div>
  );
};

export default EditData;
