'use server'

import { neon } from '@neondatabase/serverless';

export async function create(formData: FormData) {
  // Connect to the Neon database
  const sql = neon(`${process.env.DATABASE_URL}`);
  const date = formData.get('date');
  const description = formData.get('description');
  const stat = formData.get('stat');
  const rate = formData.get('rate');

  // Insert the entry from the form into the Postgres database
  await sql.query(`INSERT INTO bugs2 (date, description, status, rate) VALUES ($1, $2, $3, $4)`, 
    [date, description, stat, rate]);
}

export async function Entries() {
  console.log("0 enter function");

  // Connect to the Neon database
  const sql = neon(`${process.env.DATABASE_URL}`, { arrayMode: true });
  console.log("1 connected");

  // Collect all bugs 
  const myRows = await sql.query(`SELECT * from bugs2 ORDER BY date DESC`);
  console.log("2 collected bugs");

  return {
    props: { myRows },
  };
};

  // return (
  //   <>
  //     {rows.map((row) => (
  //       <div key={row[0]} className="bug-card">
  //         <div className="bug-for-card">
  //           <pre> {cardBug} </pre>
  //         </div>
  //         <div className="card-text">
  //           <h3>bug on {(row[1]).toDateString()}</h3>
  //           <p>
  //             description: {row[2]}<br></br>
  //             status: {row[3]}<br></br>
  //             rating: {row[4]}</p>
  //         </div>
  //       </div>
  //     ))}
  //   </>
  // )
