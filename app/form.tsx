"use client";

export default function Form() {

  return (
    <form id="bugform">
      <div className="form-input">
        <label>date:</label>
        <input type="date" id="date" name="date" required></input>
      </div>
      <div className="form-input">
        <label>description of bug (in words, not code):</label>
        <input type="text"
          id="description" name="description"
          required
          pattern="^[0-9a-zA-Z]{1,16}$"></input>
      </div>
      <div className="form-input">
        <label>status of bug:</label>
        <input type="radio"
          id="solved" name="stat" value="solved"
          required> solved</input>
          <input type="radio"
            id="unsolved" name="stat" value="unsolved"
            required> unsolved</input>
          </div>
          <div className="form-input">
            <label>
              rate this bug out of 10:
            </label>
            <input type="number"
              id="rate" name="rate"
              required></input>
          </div>
          <div className="btn"><button type="submit">
            Add Bug
          </button></div>
        </form>
    );
}