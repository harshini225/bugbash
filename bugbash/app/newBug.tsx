'use client'

import './globals.css'

import { BugCreate } from "./types";
import React from "react";
import { createBug } from './actions'
import { usePosts } from "./usePosts";

export const NewBug = () => {
  const { refresh } = usePosts();

  const initialFormState = {
    date: new Date("2025-09-09"),
    description: "",
    status: "",
    rate: 0,
  }

  const [postData, setPostData] = React.useState<BugCreate>(initialFormState);

  const onSubmit = React.useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      await createBug(postData);

      setPostData(initialFormState);

      refresh();
    },
    [refresh, postData]
  );

  return (
    <form id="bugform" onSubmit={onSubmit}>
      <div className="form-input">
        <label>date:</label>
        <input type="date" id="date" name="date" required
          onChange={(e) =>
              setPostData({ ...postData, date: new Date(e.target.value) })
          }>
        </input>
      </div>
      <div className="form-input">
        <label>description of bug (in words, not code):</label>
        <input type="text"
          id="description" name="description" value={postData.description}
          required placeholder="describe..."
          pattern="^[0-9a-zA-Z ]{1,32}$"
          onChange={(e) =>
              setPostData({ ...postData, description: e.target.value })
          }>
        </input>
      </div>
      <div className="form-input">
        <label>status of bug:</label>
        solved
        <input type="radio" id="solved" name="stat" value="solved" required
          onChange={(e) =>
              setPostData({ ...postData, status: e.target.value })
          }
        >
        </input>
        unsolved
        <input type="radio" id="unsolved" name="stat" value="unsolved" required
          onChange={(e) =>
              setPostData({ ...postData, status: e.target.value })
          }
        >
        </input>
      </div>
      <div className="form-input">
        <label>
          rate this bug out of 10:
        </label>
        <input type="number"
          id="rate" name="rate"
          required placeholder="rate..."
          value={postData.rate}
          onChange={(e) =>
              setPostData({ ...postData, rate: Number(e.target.value) })
          }>
        </input>
      </div>
      <div className="btn"><button type="submit">
        Add Bug
      </button></div>
    </form>
  )
}