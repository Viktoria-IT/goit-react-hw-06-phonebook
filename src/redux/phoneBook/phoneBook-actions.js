import { ADD, DELETE, FILTER } from "./phoneBook-constants";
import { createAction } from "@reduxjs/toolkit";

export const addToContacts = createAction(ADD);
export const deleteContact = createAction(DELETE);
export const setFilterField = createAction(FILTER);
