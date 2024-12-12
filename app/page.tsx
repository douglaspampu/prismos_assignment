import Link from "next/link";

export default function Home() {
  return (
  <>
    <Link className="text-blue-600 visited:text-purple-600 text-lg" href={`/politicians`}>Visit the politicians page</Link>
  </>)
}