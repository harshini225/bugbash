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
//   return (
//     <div>
//       <h1 className="title is-5">Posts</h1>
//       {posts.map((post) => (
//         <div key={post.id} className="box">
//           <p>{post.content}</p>
//         </div>
//       ))}
//     </div>
//   );
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
    // <div>
    //     {posts.map((row) => (
    //         <div key={row[0].toString()} className="bug-card">
    //             <pre> {cardBug} </pre>
    //         </div>
    //     ))}
    // </div>
    // <div>
    //     { posts[0].toString() } <br></br>
    //     { posts[1].toString() } <br></br>
    //     { posts[2].toString() } <br></br>
    // </div>
  );
};

// async function GetData() {
//   const myData = await listBugs();
//   const rows = myData
//   return (
//     <>
//       {rows.map((row) => (
//         <div key={row[0]} className="bug-card">
//           <div className="bug-for-card">
//             <pre> {cardBug} </pre>
//           </div>
//           <div className="card-text">
//             <h3>bug on {(row[1]).toDateString()}</h3>
//             <p>
//               description: {row[2]}<br></br>
//               status: {row[3]}<br></br>
//               rating: {row[4]}</p>
//           </div>
//         </div>
//       ))}
//     </>
//   )
// }