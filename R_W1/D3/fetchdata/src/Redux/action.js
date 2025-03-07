export const EDIT_CRUD = "EDIT_CRUD";

export const FETCH_DATA = "FETCH_DATA";
export const DELETE_DATA = "DELETE_DATA";

export const fetchData = (payload) => {
  //   console.log("action payload----------->", payload);

  return {
    type: FETCH_DATA,
    payload,
  };
};

export const edit = (payload, id) => {
  //   console.log("payload--------->", payload);
  //   console.log("id--------->", id);

  return {
    type: EDIT_CRUD,
    id,
    payload,
  };
};

export const deleteData = (payload) => {
  console.log("deleteData payload--------->", payload);

  return {
    type: DELETE_DATA,
    payload,
  };
};
