import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import { useState } from "react";
import { create } from "../Redux/action";
import TodoItem from "./todoItem";
import RestoreData from "./restoreData";

const TodoData = () => {
  const [inputValue, setInputValue] = useState("");

  const currentState = useSelector((state) => {
    return state;
  });

  console.log("currentState--------->", currentState);

  const dispatch = useDispatch();

  return (
    <div>
      <div className="flex justify-center items-center h-[50vh] flex-col">
        <div className="flex gap-1">
          <input
            type="text"
            placeholder="Add item"
            className="border border-zinc-400 focus:outline-none px-3 py-1 rounded-sm w-[300px]"
            value={inputValue}
            onChange={(ev) => setInputValue(ev.target.value)}
          />
          <Button
            title={"Add"}
            className={`text-xl rounded-sm bg-slate-400 hover:bg-slate-500 px-5 text-white`}
            onClick={() => {
              dispatch(create(inputValue));
              setInputValue("");
            }}
          />
        </div>
        <div className="mt-1">
          {currentState.todoReducer?.todoArr?.map((item) => {
            return <TodoItem key={item.id} item={item} />;
          })}
        </div>

        {currentState.todoReducer.resArr.length ? (
          <div className="mt-[3rem]">
            <h1 className="text-left text-3xl mb-3">Restore Data</h1>
            {currentState.todoReducer?.resArr?.map((item) => {
              return <RestoreData key={item.id} item={item} />;
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default TodoData;
