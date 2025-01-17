import { useReducer } from "react";
import InputContainer from "./InputContainer";
import TodoListContainer from "./TodoListContainer";

const TodoContainer = () => {
  let reducer = (state, action) => {
    let newState = state;
    if (action.type === "DONE_TODO") {
      newState = state.map((todoItem) =>
        todoItem.task === action.payload.task
          ? { ...todoItem, isDone: !todoItem.isDone }
          : todoItem
      );
    } else if (action.type === "DELETE_TODO") {
      newState = state.filter(
        (todoItem) => todoItem.task !== action.payload.task
      );
    } else if (action.type === "ADD_ITEM") {
      if (action.payload.task == "") {
        alert("Please Enter Todo");
        return newState;
      }
      newState = [
        ...state,
        {
          task: action.payload.task,
          date: action.payload.date,
          time: action.payload.time,
          isDone: false,
        },
      ];
    }
    return newState;
  };

  let [todoData, dispatch] = useReducer(reducer, []);
  const handleAddButton = (event, taskElement, dateElement, timeElement) => {
    event.preventDefault();
    const task = taskElement.current.value;
    let fullDateInfo = new Date();

    let time =
      timeElement.current.value === ""
        ? `${fullDateInfo.getHours()}:${fullDateInfo.getMinutes()}`
        : timeElement.current.value;

    let fullDate;
    if (dateElement.current.value === "") {
      fullDate = `${fullDateInfo.getDate()}/${fullDateInfo.getMonth() + 1}/${
        fullDateInfo.getFullYear() % 100
      }`;
    } else {
      let [year, month, date] = dateElement.current.value.split("-");
      fullDate = `${date}/${month}/${year % 100}`;
    }

    dispatch({
      type: "ADD_ITEM",
      payload: {
        task: task,
        date: fullDate,
        time: time,
      },
    });

    taskElement.current.value = "";
    dateElement.current.value = "";
    timeElement.current.value = "";
  };

  const handleDoneButton = (task) => {
    dispatch({
      type: "DONE_TODO",
      payload: {
        task,
      },
    });
  };
  const handleDeleteButton = (task) => {
    dispatch({
      type: "DELETE_TODO",
      payload: {
        task,
      },
    });
  };

  return (
    <div className="todo-container">
      <InputContainer handleAddButton={handleAddButton}></InputContainer>
      <TodoListContainer
        todoData={todoData}
        handleDoneButton={handleDoneButton}
        handleDeleteButton={handleDeleteButton}
      ></TodoListContainer>
    </div>
  );
};

export default TodoContainer;
