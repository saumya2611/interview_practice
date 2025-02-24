export const CREATE_TODO = "CREATE_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const UPADATE_TODO = "UPADATE_TODO";
export const RESTORE_TODO = "RESTORE_TODO";

export const createTodo = (payload) => {
  //   console.log("Action ----------> payload-------->", payload);

  return {
    type: CREATE_TODO,
    payload,
  };
};

export const updateTodo = (payload, newValue) => {
  //   console.log("Action ----------> payload-------->", payload);
  //   console.log("Action ----------> newValue-------->", newValue);

  return {
    type: UPADATE_TODO,
    payload,
    newValue,
  };
};

export const deleteTodo = (payload) => {
  //   console.log("Action ----------> payload-------->", payload);

  return {
    type: DELETE_TODO,
    payload,
  };
};
export const restoreData = (payload) => {
  console.log("Action ----------> payload-------->", payload);

  return {
    type: RESTORE_TODO,
    payload,
  };
};
