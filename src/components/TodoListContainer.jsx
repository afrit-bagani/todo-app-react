import { SiTicktick } from "react-icons/si";
import { ImUndo2 } from "react-icons/im";
import { MdDeleteSweep } from "react-icons/md";

const TodoListContainer = ({
  todoData,
  handleDoneButton,
  handleDeleteButton,
}) => {
  return (
    <div className="todo-list-container">
      <ol className="task-ol-list">
        {todoData.map((todoItem, index) => (
          <li className="task-list" key={index}>
            <div
              className={`${todoItem.isDone ? "done" : ""} task-info-container`}
            >
              <div className="task">{todoItem.task}</div>
              <div className="time">{todoItem.time}</div>
              <div className="date">{todoItem.date}</div>
            </div>

            <div className="button-container">
              <button
                type="button"
                className="btn af-done-btn"
                onClick={() => handleDoneButton(todoItem.task)}
              >
                {todoItem.isDone ? <ImUndo2 /> : <SiTicktick />}
              </button>
              <button
                type="button"
                className="btn af-del-btn"
                onClick={() => handleDeleteButton(todoItem.task)}
              >
                <MdDeleteSweep />
              </button>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default TodoListContainer;
