import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('tasks/addContact');
console.log(addContact.type);

export const deleteContact = createAction('tasks/deleteContact');

export const setStatusFilter = createAction('filters/setStatusFilter');
