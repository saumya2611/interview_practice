import React, { useState } from "react";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo } from "../Redux/action";

const TodoItem = ({ item }) => {
  const [edit, setEdit] = useState(false);

  const [updateValue, setUpdateValue] = useState(item.value);
  const dispatch = useDispatch();

  return (
    <div className="flex gap-1 mt-0.5">
      <div className="border border-zinc-400 focus:outline-none px-3 py-1 rounded-sm w-[225px] text-left">
        {edit === true ? (
          <input
            type="text"
            className="border text-center"
            value={updateValue}
            onChange={(ev) => setUpdateValue(ev.target.value)}
          />
        ) : (
          item.value
        )}
      </div>

      {edit === true ? (
        <Button
          title={"Save"}
          className={`rounded-sm bg-lime-600 hover:bg-lime-700 px-5 text-white`}
          onClick={() => {
            setEdit(false);
            dispatch(editTodo(item, updateValue));
          }}
        />
      ) : (
        <Button
          title={"Edit"}
          className={`rounded-sm bg-lime-600 hover:bg-lime-700 px-5 text-white`}
          onClick={() => setEdit(true)}
        />
      )}

      <Button
        title={"Delete"}
        className={`rounded-sm bg-red-500 hover:bg-red-400 px-4 text-white`}
        onClick={() => dispatch(deleteTodo(item))}
      />
    </div>
  );
};

export default TodoItem;
