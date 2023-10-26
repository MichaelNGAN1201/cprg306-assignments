import Link from 'next/link';
import StudentInfo from './StudentInfo/page.js';

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
      <br />
      <Link href="/week5">Go to Week 5</Link>
      <br />
      <Link href="/week6">Go to Week 6</Link>
      <br />
      <Link href="/week7">Go to Week 7</Link>
    </main>
  );
}



