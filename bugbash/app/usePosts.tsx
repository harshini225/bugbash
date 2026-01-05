"use client";

import React from "react";

import { BugData } from "./types";
import { listBugs } from "./actions";


const postsContext = React.createContext({
  posts: [] as BugData[][],
  refresh: () => {},
});

export const PostsProvider = ({ children }: { children: React.ReactNode }) => {
  const [posts, setPosts] = React.useState([] as BugData[][]);

  const refresh = React.useCallback(async () => {
    listBugs().then(setPosts);
  }, []);

  React.useEffect(() => {
    refresh();
    return;
  }, [refresh]);

  return (
    <postsContext.Provider
      value={{
        posts,
        refresh,
      }}
    >
      {children}
    </postsContext.Provider>
  );
};

export const usePosts = () => React.useContext(postsContext);