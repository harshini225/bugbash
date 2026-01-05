'use server'

import { neon } from '@neondatabase/serverless';
import { BugCreate, BugData } from './types';

// export async function createBug(formData: FormData) {
//   console.log(formData)
//   // Connect to the Neon database
//   const sql = neon(`${process.env.DATABASE_URL}`);

//   const date = formData.get('date');
//   const description = formData.get('description');
//   const stat = formData.get('stat');
//   const rate = formData.get('rate');

//   // Insert the entry from the form into the Postgres database
//   await sql.query(`INSERT INTO bugs2 (date, description, status, rate) VALUES ($1, $2, $3, $4)`, 
//     [date, description, stat, rate]);
// }

export async function createBug(post: BugCreate) {
  // Connect to the Neon database
  const sql = neon(`${process.env.DATABASE_URL}`);

  // Insert the entry from the form into the Postgres database
  await sql.query(`INSERT INTO bugs2 (date, description, status, rate) VALUES ($1, $2, $3, $4)`, 
    [post.date, post.description, post.status, post.rate]
  );
}

export async function listBugs() {
  // Connect to the Neon database
  const sql = neon(`${process.env.DATABASE_URL}`, { arrayMode: true });

  // Collect all bugs 
  const myRows = await sql.query(`SELECT * from bugs2 ORDER BY date DESC`);

  console.log("retrieved bugs");
  return myRows;
};
