// import { CREATE_TODO, DELETE_TODO, EDIT_TODO, RESTORE_TODO } from "../action";

// const initialValue = {
//   todoArr: [],
//   resArr: [],
//   idCnt: 1,
// };

// export const todoReducer = (state = initialValue, action) => {
//   const { type, payload, newValue } = action;
//   // console.log("newValue-------->", newValue);

//   switch (type) {
//     case CREATE_TODO:
//       const todoObj = {
//         value: payload,
//         id: state.idCnt,
//       };
//       // console.log("todoObj-------->", todoObj);

//       return {
//         ...state,
//         todoArr: [...state.todoArr, todoObj],
//         idCnt: state.idCnt + 1,
//       };

//     case EDIT_TODO:
//       const updatedValue = state.todoArr.map((item) => {
//         if (item.id === payload.id) {
//           return {
//             value: newValue,
//             id: payload.id,
//           };
//         }

//         return item;
//       });
//       // console.log("updatedValue----------->", updatedValue);

//       return {
//         ...state,
//         todoArr: updatedValue,
//       };

//     case DELETE_TODO:
//       const deleteItem = state.todoArr.filter((item) => {
//         return item.id != payload.id;
//       });

//       const restoreItem = state.todoArr.find((item) => {
//         return item.id === payload.id;
//       });

//       console.log("restoreItem---------->", restoreItem);

//       console.log("deleteItem==========>", deleteItem);

//       return {
//         ...state,
//         todoArr: deleteItem,
//         resArr: [...state.resArr, restoreItem],
//       };

//     case RESTORE_TODO:
//       const restoreData = state.resArr.filter((item) => {
//         return item.id != payload.id;
//       });

//       const restoreList = state.resArr.find((item) => {
//         return item.id === payload.id;
//       });

//       console.log("restoreList==========>", restoreList);
//       console.log("restoreData==========>", restoreData);

//       return {
//         ...state,
//         resArr: restoreData,
//         todoArr: [...state.todoArr, restoreList],
//       };

//     default:
//       return state;
//   }
// };
