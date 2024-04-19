import { createSlice } from "@reduxjs/toolkit";

interface ToDoStateItem {
  task: string;
  status: string;
}

interface ToDoState {
  toDoList: ToDoStateItem[];
}

const initialState: ToDoState = {
  toDoList: [],
};

const toDoSlice = createSlice({
  name: "toDo",
  initialState,
  reducers: {
    addTask: (state, action) => {
      console.log("Добавить задачу", action);
      state.toDoList = [...state.toDoList, action.payload];
    },
    completeTask: (state, action) => {
      console.log("Завершить задачу");
    },
    delCompletedTasks: (state, action) => {
      console.log("Удалить все завершенные задачи");
    },
  },
});

export const { addTask, completeTask, delCompletedTasks } = toDoSlice.actions;
export default toDoSlice.reducer;
