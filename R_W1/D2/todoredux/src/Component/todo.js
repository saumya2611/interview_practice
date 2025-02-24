import React, { useEffect, useState } from "react";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { createTodo } from "../Redux/Action";
import TodoData from "./todoData";
import { RestoreData } from "./restore";

const Todo = () => {
  const [inputValue, setInputValue] = useState("");

  const currentState = useSelector((state) => {
    console.log(
      "state.todoReducers.todoReducers-----------------> todo file ----->",
      state.todoReducers.todoArr
    );

    return state;
  });

  console.log("currentState-------->", currentState);

  const addItem = () => {
    dispatch(createTodo(inputValue));
    console.log("inputValue----->", inputValue);
    setInputValue("");
  };

  const dispatch = useDispatch();

  //   useEffect(() => {
  //     console.log("inputValue--------->", inputValue);
  //   }, [inputValue]);

  return (
    <div className="h-[50vh] flex justify-center items-center flex-col">
      <div className="flex gap-1">
        <input
          type="text"
          placeholder="Add Item"
          className="px-3 py-2 w-[300px] focus:outline-none border border-1 rounded-sm"
          value={inputValue}
          onChange={(ev) => setInputValue(ev.target.value)}
        />
        <Button
          title={"Add"}
          className={`px-7 py-2 bg-slate-500 hover:bg-slate-400 text-white rounded-sm`}
          onClick={addItem}
        />
      </div>

      <div className="mt-1">
        {currentState.todoReducers.todoArr.map((item) => {
          return <TodoData key={item.id} item={item} />;
        })}
      </div>
      <div className="mt-7">
        {currentState.todoReducers.restoreArr.length ? (
          <div>
            <h1 className="text-3xl text-left text-red-500">Restore Data</h1>
            {currentState.todoReducers.restoreArr.map((item) => {
              return <RestoreData key={item.id} item={item} />;
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Todo;
