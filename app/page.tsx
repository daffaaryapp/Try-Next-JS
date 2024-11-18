
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Test</h1>
      <br />
      <Link href='/posts'>posts</Link>
      <br />
      <Link href='/albums'>albums</Link>
    </>
  );
}
