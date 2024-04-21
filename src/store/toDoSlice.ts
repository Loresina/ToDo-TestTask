import { createSlice } from "@reduxjs/toolkit";

interface ToDoStateItem {
  task: string;
  active: boolean;
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
      state.toDoList = [...state.toDoList, action.payload];
    },
    setActive: (state, action) => {
      state.toDoList = state.toDoList.map((oneTask) => {
        return oneTask.task === action.payload.task
          ? { task: oneTask.task, active: !oneTask.active }
          : oneTask;
      });
    },
    delCompletedTasks: (state, action) => {
      console.log("Удалить все завершенные задачи");
    },
  },
});

export const { addTask, setActive, delCompletedTasks } = toDoSlice.actions;
export default toDoSlice.reducer;
