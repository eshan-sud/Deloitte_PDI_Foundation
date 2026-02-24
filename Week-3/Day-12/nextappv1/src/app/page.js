import Link from "next/link";

export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-6">Hello World NextJS</h1>
      <nav>
        <Link href="/dashboard" className="btn btn-primary">
          Go to Dashboard
        </Link>
      </nav>
    </div>
  );
}
