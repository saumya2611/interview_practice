export const CREATE_TODO = "CREATE_TODO";
export const EDIT_TODO = "EDIT_TODO";
export const DELETE_TODO = "first";
export const RESTORE_TODO = "RESTORE_TODO";

export const create = (payload) => {
  //   console.log("create payload--------->", payload);

  return {
    type: CREATE_TODO,
    payload,
  };
};

export const editTodo = (payload, newValue) => {
  //   console.log("edit payload---------> newValue", payload, newValue);
  return {
    type: EDIT_TODO,

    payload,
    newValue,
  };
};

export const deleteTodo = (payload) => {
  //   console.log("deleteTodo payload---------> ", payload);
  return {
    type: DELETE_TODO,
    payload,
  };
};

export const restoreTodo = (payload) => {
  console.log("restoreTodo payload---------> ", payload);
  return {
    type: RESTORE_TODO,
    payload,
  };
};
