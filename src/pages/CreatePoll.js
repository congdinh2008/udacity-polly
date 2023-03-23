import { useState } from "react";
import { FaPoll } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const CreatePoll = () => {
  const [optionOne, setOptionOne] = useState("");
  const [optionTwo, setOptionTwo] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // call your API to authenticate user
    // assuming the API returns a user object with an id and name property
    navigate("/");
  };

  return (
    <section className="form-section d-flex flex-colum justify-content-center align-items-center">
      <div className="form-container create-poll-container text-center">
        <div className="form-header">
          <h1>Would You Rather</h1>
          <span>Create Your Own Poll</span>
        </div>
        <div className="form create-poll-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group d-flex flex-column">
              <label htmlFor="option-one" className="form-control-label">
                First Option
              </label>
              <input
                type="text"
                id="option-one"
                placeholder="Option One"
                value={optionOne}
                onChange={(event) => setOptionOne(event.target.value)}
                />
            </div>
            <div className="form-group d-flex flex-column">
              <label htmlFor="option-two" className="form-control-label">
                Second Option
              </label>
              <input
                type="text"
                id="option-two"
                placeholder="Option Two"
                value={optionTwo}
                onChange={(event) => setOptionTwo(event.target.value)}
              />
            </div>
            <button type="submit">Create Poll</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CreatePoll;
