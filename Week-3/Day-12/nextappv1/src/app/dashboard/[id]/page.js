"use client";
import { useState, useEffect, use } from "react";
import Link from "next/link";

export default function ListingDetails({ params }) {
  const resolvedParams = use(params);
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchListing = async () => {
      try {
        const id = resolvedParams.id;
        console.log("Fetching listing with ID:", id);

        const response = await fetch(
          `http://localhost:3001/api/v1/listings/${id}`,
        );
        const data = await response.json();

        console.log("Listing details response:", data);

        if (data.data) {
          setListing(data.data);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching listing:", error);
        setLoading(false);
      }
    };

    fetchListing();
  }, [resolvedParams.id]);

  if (loading) {
    return (
      <div className="p-8">
        <p className="text-lg">Loading...</p>
      </div>
    );
  }

  if (!listing) {
    return (
      <div className="p-8">
        <p className="text-lg mb-4">Listing not found</p>
        <Link href="/dashboard" className="btn btn-primary">
          Back to Dashboard
        </Link>
      </div>
    );
  }

  return (
    <div className="p-8">
      <div className="mb-4">
        <Link href="/dashboard" className="btn btn-sm btn-ghost">
          ← Back to Dashboard
        </Link>
      </div>

      <h1 className="text-3xl font-bold mb-6">Listing Details</h1>

      <div className="card bg-base-100 shadow-xl">
        {listing.photo && (
          <figure>
            <img
              src={listing.photo}
              alt={listing.name}
              className="w-full h-64 object-cover"
            />
          </figure>
        )}

        <div className="card-body">
          <h2 className="card-title text-2xl">{listing.name}</h2>

          <div className="divider"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border p-3 rounded">
              <p className="font-bold text-gray-600">ID:</p>
              <p className="text-lg">{listing.id}</p>
            </div>

            <div className="border p-3 rounded">
              <p className="font-bold text-gray-600">City:</p>
              <p className="text-lg">{listing.city || "N/A"}</p>
            </div>

            <div className="border p-3 rounded">
              <p className="font-bold text-gray-600">State:</p>
              <p className="text-lg">{listing.state || "N/A"}</p>
            </div>

            <div className="border p-3 rounded">
              <p className="font-bold text-gray-600">Price:</p>
              <p className="text-lg">
                {listing.price ? `$${listing.price}` : "Contact for price"}
              </p>
            </div>

            <div className="border p-3 rounded">
              <p className="font-bold text-gray-600">Available Units:</p>
              <p className="text-lg">{listing.availableUnits}</p>
            </div>

            <div className="border p-3 rounded">
              <p className="font-bold text-gray-600">Location:</p>
              <p className="text-lg">{listing.location || "N/A"}</p>
            </div>

            <div className="border p-3 rounded">
              <p className="font-bold text-gray-600">WiFi:</p>
              <p className="text-lg">{listing.wifi ? "✓ Yes" : "✗ No"}</p>
            </div>

            <div className="border p-3 rounded">
              <p className="font-bold text-gray-600">Laundry:</p>
              <p className="text-lg">{listing.laundry ? "✓ Yes" : "✗ No"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
