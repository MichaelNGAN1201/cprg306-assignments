// ./app/page.js
import Link from 'next/link';
import StudentInfo from './StudentInfo/page.js';


// Add the "use client" directive to mark this as a client component
/* use client */

export default function Home() {
  return (
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <StudentInfo />
      <Link href="/week2">Go to Week 2</Link>
      <br />
      <Link href="/week3">Go to Week 3</Link>
      <br />
      <Link href="/week4">Go to Week 4</Link>
    </main>
  );
}



