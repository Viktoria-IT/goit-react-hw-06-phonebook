import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { ADD, DELETE, FILTER } from "./phoneBook-constants";

const data = JSON.parse(localStorage.getItem("items"));
let initialState;
if (data !== null) {
  initialState = [...data];
} else {
  initialState = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ];
}

const itemsReducer = createReducer(initialState, {
  [ADD]: (state, { payload }) => {
    const isInList = state.find((item) => item.number === payload.number);
    if (isInList) {
      alert(`${payload.name} is already in contacts`);
      return state;
    } else {
      return [...state, payload];
    }
  },
  [DELETE]: (state, { payload }) => {
    const filtered = state.filter((contact) => {
      return contact.name !== payload;
    });
    return [...filtered];
  },
});

const filterReducer = createReducer("", {
  [FILTER]: (_, { payload }) => payload,
});

export const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
