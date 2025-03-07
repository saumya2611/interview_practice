import { DELETE_DATA, EDIT_CRUD, FETCH_DATA } from "../action";

const initalState = {
  fetchData: [],
  filterData: [],
};

export const crudReducers = (state = initalState, action) => {
  const { type, payload, id } = action;
  console.log("crudReducers   id----------> ", id);

  console.log("crudReducers   payload----------> ", payload);

  switch (type) {
    case FETCH_DATA:
      return {
        ...state,
        fetchData: payload,
        filterData: payload,
      };

    case EDIT_CRUD:
      const updateData = state.filterData.map((item) => {
        // console.log("item----------->", item);

        if (item.id === id) {
          return {
            ...item,
            title: payload,
          };
        }
        return item;
      });
      console.log("updateData------------>", updateData);
      return {
        ...state,
        fetchData: updateData,
        filterData: updateData,
      };

    case DELETE_DATA:
      const delItem = state.filterData.filter((item) => {
        return item.id != payload;
      });

      console.log("delItem---------->", delItem);
      return {
        ...state,
        filterData: delItem,
      };
    default:
      return state;
  }
};
