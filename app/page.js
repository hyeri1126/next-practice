import Link from "next/link";

export default function Home() {
  return (
   <main>
      <Link href="/profile">Go to Profile page <br/></Link>
      <Link href="/products">Go to products page</Link>
   </main>
  );
}
