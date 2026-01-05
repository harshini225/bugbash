"use client";

import { usePosts } from "./usePosts";

var cardBug = String.raw`
    _  _
   | )/ )
\\ |//,' __
(")(_)-"()))=
   (\\
`

export const Posts = () => {
  const { posts } = usePosts();

  return (
    <>
      {posts.map((row) => (
        <div key={row[0].toString()} className="bug-card">
          <div className="bug-for-card">
            <pre> {cardBug} </pre>
          </div>
          <div className="card-text">
            <h3>bug on {row[1].toString().split(" ").slice(0,4).join(" ")}</h3>
            <p>
              description: {row[2].toString()}<br></br>
              status: {row[3].toString()}<br></br>
              rating: {row[4].toString()}</p>
          </div>
        </div>
      ))}
    </>
  );
};