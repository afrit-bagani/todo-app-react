import { useRef } from "react";
import { RiAddLargeFill } from "react-icons/ri";

const InputContainer = ({ handleAddButton }) => {
  const taskElement = useRef();
  const dateElement = useRef();
  const timeElement = useRef();

  return (
    <div className="input-container">
      <form
        className="form-container"
        onSubmit={(event) =>
          handleAddButton(event, taskElement, dateElement, timeElement)
        }
      >
        <input
          type="text"
          className="text-input"
          placeholder="Enter Todo"
          ref={taskElement}
        />
        <input type="date" className="date-input" ref={dateElement} />
        <input type="time" className="time-input" ref={timeElement} />
        <button type="submit" className="btn af-add-btn">
          <RiAddLargeFill />
        </button>
      </form>
    </div>
  );
};

export default InputContainer;
