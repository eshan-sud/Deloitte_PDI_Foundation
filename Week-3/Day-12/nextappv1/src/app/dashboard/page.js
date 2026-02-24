"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Dashboard() {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3001/api/v1/listings")
      .then((res) => res.json())
      .then((data) => {
        console.log("API Response:", data);
        if (data.data) {
          setListings(data.data);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching listings:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-8">
      <div className="mb-4">
        <Link href="/" className="btn btn-sm btn-ghost">
          ← Back to Home
        </Link>
      </div>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div>
        <h2 className="text-2xl mb-4">All Listings</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full border">
              <thead>
                <tr>
                  <th className="border px-4 py-2">ID</th>
                  <th className="border px-4 py-2">Title</th>
                  <th className="border px-4 py-2">City</th>
                  <th className="border px-4 py-2">State</th>
                  <th className="border px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {listings.length > 0 ? (
                  listings.map((listing) => (
                    <tr key={listing.id}>
                      <td className="border px-4 py-2">{listing.id}</td>
                      <td className="border px-4 py-2">
                        <Link
                          href={`/dashboard/${listing.id}`}
                          className="link link-primary"
                        >
                          {listing.name}
                        </Link>
                      </td>
                      <td className="border px-4 py-2">{listing.city}</td>
                      <td className="border px-4 py-2">{listing.state}</td>
                      <td className="border px-4 py-2">
                        <Link
                          href={`/dashboard/${listing.id}`}
                          className="btn btn-sm btn-primary"
                        >
                          View
                        </Link>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="border px-4 py-2 text-center">
                      No listings found. Check console for errors.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
