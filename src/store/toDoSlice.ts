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
    deleteCompleted: (state) => {
      state.toDoList = state.toDoList.filter((oneTask) => oneTask.active);
    },
  },
});

export const { addTask, setActive, deleteCompleted } = toDoSlice.actions;
export default toDoSlice.reducer;
