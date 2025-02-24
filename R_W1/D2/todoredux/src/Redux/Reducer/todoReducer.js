import {
  CREATE_TODO,
  DELETE_TODO,
  RESTORE_TODO,
  UPADATE_TODO,
} from "../Action";

const initialValue = {
  todoArr: [],
  restoreArr: [],
  idCnt: 1,
};

export const todoReducers = (state = initialValue, action) => {
  const { type, payload, newValue } = action;
  console.log("todoReducers ----------> payload-------->", type, payload);
  //   console.log("todoReducers ----------> newValue-------->", newValue);

  switch (type) {
    case CREATE_TODO:
      const todoObj = {
        value: payload,
        id: state.idCnt,
      };

      //   console.log("todoObj-------->", todoObj);

      return {
        ...state,
        idCnt: state.idCnt + 1,
        todoArr: [...state.todoArr, todoObj],
      };

    case UPADATE_TODO:
      console.log(" UPADATE_TODO-------->payload--------->", payload);
      // arr = [{value: "a", id: 1},{value: "b", id: 2},{value: "c", id: 3}]
      // payload {value: "c" ,id: 3}

      const updateData = state.todoArr.map((item) => {
        if (item.id === payload.id) {
          return {
            value: newValue,
            id: payload.id,
          };
        }

        return item;
      });
      console.log("updateData------------>", updateData);

      return {
        ...state,
        todoArr: updateData,
      };

    case DELETE_TODO:
      const restoreItem = state.todoArr.find((item) => {
        return item.id === payload;
      });
      console.log("restoreItem--------->", restoreItem);

      const deleteData = state.todoArr.filter((item) => {
        return item.id != payload;
      });

      console.log("deleteData--------->", deleteData);

      return {
        ...state,
        restoreArr: [...state.restoreArr, restoreItem],
        todoArr: deleteData,
      };

    case RESTORE_TODO:
      const restoreData = state.restoreArr.filter((item) => {
        return item.id != payload.id;
      });
      console.log("restoreData--------->", restoreData);

      const restoreUserData = state.restoreArr.find((item) => {
        return item.id === payload.id;
      });

      console.log("restoreUserData-------->", restoreUserData);

      return {
        ...state,
        todoArr: [...state.todoArr, restoreUserData],

        restoreArr: restoreData,
      };

    default:
      return state;
  }
};
