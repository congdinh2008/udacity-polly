import { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleAddQuestion } from "../actions/questions";
import RouteURLs from "../constants/routeURLs";

const CreatePoll = () => {
  const [optionOneText, setOptionOneText] = useState("");
  const [optionTwoText, setOptionTwoText] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    // call your API to authenticate user
    // assuming the API returns a user object with an id and name property
    dispatch(handleAddQuestion({ optionOneText, optionTwoText }));
    setOptionOneText("");
    setOptionTwoText("");
    navigate(RouteURLs.HOME_URL);
  };

  return (
    <section className="form-section d-flex flex-colum justify-content-center">
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
                value={optionOneText}
                onChange={(event) => setOptionOneText(event.target.value)}
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
                value={optionTwoText}
                onChange={(event) => setOptionTwoText(event.target.value)}
              />
            </div>
            <button
              className="btn btn-submit"
              type="submit"
              disabled={optionOneText === "" || optionTwoText === ""}
            >
              Create Poll
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default connect()(CreatePoll);
