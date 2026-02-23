const URL = "http://localhost:3000/api/v1/listings";

const listings = {
  async fetchListings() {
    try {
      const response = await fetch(URL, { method: "GET" });
      if (!response.ok) {
        throw new Error("Failed to fetch listings");
      }
      const data = await response.json();
      return data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
};

export default listings;
