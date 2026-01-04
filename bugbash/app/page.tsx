import "./globals.css"

import { NewBug } from './newBug'
import { Posts } from "./bugs";
import { PostsProvider } from "./usePosts";

// import { listBugs } from './actions'

var myBug = String.raw`
  ,,     ,,     ,,
  oo    _oo_   ,oo,
 /==\   /==\   /==\
 (/==\) (/==\) (/==\)
  \/     \/     \/`;

var cardBug = String.raw`
    _  _
   | )/ )
\\ |//,' __
(")(_)-"()))=
   (\\
`

export default function Home() {

  return (
    <PostsProvider>
    <main className='flex min-h-screen flex-col items-center p-12'>
      <div className="full-website">
        <h1>
          debugging guide
        </h1>
        <h2>
          . ݁₊ ⊹ . ݁˖ . ݁ understanding the problem . ݁₊ ⊹ . ݁˖ . ݁
        </h2>
        <p>
          as you start to debug your code, it is important to know: <br></br>
          (1) what the code is supposed to be doing, and <br></br>
          (2) what the code is actually doing <br></br>
          <br></br>
          to clarify these, it helps to work through a <b>concrete example</b>.
          when you ask for help, this concrete example helps another person understand what is going on.
        </p>
        <h2>
          . ݁₊ ⊹ . ݁˖ . ݁ working through a concrete example by hand . ݁₊ ⊹ . ݁˖ . ݁
        </h2>
        <p>
          select a good example! you want one that is just complicated enough to show the general structure of your code,
          but simple enough that you can work through it by hand.
          for example, if you're working with a dataset, you can make an example dataset with three rows and three columns. <br></br>
          <br></br>
          as you're working with your example, do <b>not</b> look back at your code. make sure you write down what should happen at each step, and what the output should be.<br></br>
          <br></br>
          after you're clear on this, go back to your code and step through each line. you can use a Debugger in your coding environment, if you have one. <br></br>
          <br></br>
          keep writing and testing examples as you write code! use these <b>test cases</b> to help you in debugging.
        </p>
        <h2>
          . ݁₊ ⊹ . ݁˖ . ݁ interpreting error messages . ݁₊ ⊹ . ݁˖ . ݁
        </h2>
        <p>
          learning to interpret error messages will help you debug. the messages can give you clues into the type of error as well;
          some common types include Syntax errors, Type errors, and Out of Bounds/Index errors. <br></br>
          <br></br>
          + Syntax errors: the code cannot be parsed. often, the error message will tell you which line to look at,
          and maybe even if something is missing, like a parenthesis. <br></br>
          + Type error: broadly, the data value does not match the expected type. <br></br>
          + Out of Bounds/Index error: you've tried to access a position in a list or dataset that doesn't store any data. <br></br>
        </p>
        <h2>
          . ݁₊ ⊹ . ݁˖ . ݁ general tips . ݁₊ ⊹ . ݁˖ . ݁
        </h2>
        <p>
          + comment all of your code cleanly! <br></br>
          + use informative variable names. <br></br>
          + if you're using a library or other third-party code, read the documentation thoroughly! <br></br>
          + take breaks while coding! sometimes, some sleep or a shower will help you fix the issue. <br></br>
        </p>
        <div className="bug" id="bug">
          <pre> {myBug} </pre>
        </div>
        <h2>
          record your bugs here!
        </h2>
        <div className="parent-container">
          <div className="container">
            {/* <BugForm /> */}
            <NewBug />
          </div>
        </div>
        <h2>bug book</h2>
        <p> 
          {/* reload to see new bugs!<br></br> */}
          {/* <br></br> */}
          𓆣 ∘ ∘𖥸∘ ∘ 𓆣
          <br></br> <br></br></p>
        <div id="bugbook">
          {/* <GetData /> */}
          <Posts />
        </div>
        <h2>
          u got this!!!!!
        </h2>
        <div className="credits">
          -----------------------
          <br></br>
          <br></br>
          credits: <br></br>
          + the font used in headings is ByteBounce by HipFonts, which is free for non-commercial use. <br></br>
          + some content has been paraphrased from the debugging guide of cs200 at brown university, which was created and maintained by
          course staff over many years. <br></br>
          + ascii bugs are from https://www.asciiart.eu/animals/insects/bees, original creator unknown. <br></br>
          + favicon is blue bee from https://www.favicon.cc/?action=icon&file_id=973613, used under creative commons license. <br></br>
          + website deployed via next.js, vercel, neon<br></br>
          + assembled with ♡ by harshini
        </div>
      </div>
    </main>
    </PostsProvider>
  )
}

// async function BugForm() {
//   return <NewBug />
// }

// async function myEntries() {
//   return <bugEntries />
// }

// async function pageEntries() {
//   'use server';

//   console.log("0 enter function");

//   // Connect to the Neon database
//   const sql = neon(`${process.env.DATABASE_URL}`, { arrayMode: true });
//   console.log("1 connected");

//   // Collect all bugs 
//   const rows = await sql.query(`SELECT * from bugs2 ORDER BY date DESC`);
//   console.log("2 collected bugs");

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