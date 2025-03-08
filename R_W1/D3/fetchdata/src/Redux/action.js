export const EDIT_CRUD = "EDIT_CRUD";
export const FETCH_DATA = "FETCH_DATA";
export const DELETE_DATA = "DELETE_DATA";
export const SEARCH_DATA = "SEARCH_DATA";
export const SHORTING = "SHORTING";

export const fetchData = (payload) => {
  //   console.log("action payload----------->", payload);

  return {
    type: FETCH_DATA,
    payload,
  };
};

export const searchData = (payload) => {
  console.log("action payload----------->", payload);

  return {
    type: SEARCH_DATA,
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
  //   console.log("deleteData payload--------->", payload);

  return {
    type: DELETE_DATA,
    payload,
  };
};

export const shorting = (order, payload) => {
  console.log("shorting payload--------->", payload);

  return {
    type: SHORTING,
    order,
    payload,
  };
};
