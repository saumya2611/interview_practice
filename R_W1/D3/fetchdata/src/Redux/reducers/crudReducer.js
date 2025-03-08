import {
  DELETE_DATA,
  EDIT_CRUD,
  FETCH_DATA,
  SEARCH_DATA,
  SHORTING,
} from "../action";

const initalState = {
  fetchData: [],
  filterData: [],
  searchedValue: "",
  order: "",
};

export const crudReducers = (state = initalState, action) => {
  const { type, payload, id } = action;
  //   console.log("crudReducers   id----------> ", id);

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

    case SEARCH_DATA:
      const newSearchValue = state.filterData.filter((item) => {
        return item.title.toLowerCase().includes(payload.toLowerCase());
      });
      console.log("newSearchValue--------->", newSearchValue);

      return {
        ...state,
        filterData: newSearchValue,
        searchedValue: payload,
      };

    case SHORTING:
      const shortdata = [...state.filterData].sort((a, b) => {
        if (a[payload] === "number") {
          if (state.order === "asc") {
            return a[payload] - b[payload];
          } else {
            return b[payload] - a[payload];
          }
        }
      });

      return {
        ...state,
        order: action.order === "asc" ? "dsc" : "asc",
        filterData: shortdata,
      };

    default:
      return state;
  }
};
