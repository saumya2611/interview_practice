import React, { useState } from "react";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../Redux/Action";

const TodoData = ({ item }) => {
  const [edit, setEdit] = useState(false);
  const [updateValue, setUpdateValue] = useState(item.value);
  const dispatch = useDispatch();

  return (
    <div className="mt-0.5">
      <div className="flex gap-1">
        <div className="border border-zinc-300 px-3 py-1 w-[230px] text-left rounded-sm">
          {edit === true ? (
            <input
              type="text"
              value={updateValue}
              onChange={(ev) => setUpdateValue(ev.target.value)}
              className="px-2"
            />
          ) : (
            item.value
          )}
        </div>

        {edit === true ? (
          <Button
            className={`px-5 py-1 bg-lime-600 hover:bg-lime-500 text-white rounded-sm`}
            title={`Save`}
            onClick={() => {
              setEdit(false);
              dispatch(updateTodo(item, updateValue));
            }}
          />
        ) : (
          <Button
            className={`px-5 py-1 bg-lime-600 hover:bg-lime-500 text-white rounded-sm`}
            title={`Edit`}
            onClick={() => setEdit(true)}
          />
        )}

        <Button
          className={`px-4 py-1 bg-red-500 hover:bg-red-400 text-white rounded-sm`}
          title={`Delete`}
          onClick={() => {
            dispatch(deleteTodo(item.id));
          }}
        />
      </div>
    </div>
  );
};

export default TodoData;
