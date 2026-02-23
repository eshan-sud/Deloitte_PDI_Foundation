export default function AboutPage() {
  return (
    <div className="container mx-auto px-5 py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>

        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-3">
              Welcome to Our Listings Platform
            </h2>
            <p className="text-lg leading-relaxed">
              We are dedicated to helping you find the perfect property for your
              needs. Our platform showcases a wide range of housing options
              across various locations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
            <p className="text-lg leading-relaxed">
              Our mission is to simplify the property search process and connect
              people with their ideal homes. We believe everyone deserves access
              to quality housing information that's easy to navigate and
              understand.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">What We Offer</h2>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>Comprehensive property listings with detailed information</li>
              <li>Easy-to-use search and filtering options</li>
              <li>Up-to-date pricing and availability information</li>
              <li>User-friendly interface for seamless browsing</li>
            </ul>
          </section>

          <section className="bg-base-200 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-3">Get Started</h2>
            <p className="text-lg leading-relaxed">
              Browse our listings, find properties that match your criteria, and
              take the first step toward finding your new home today.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
