const fs = require("fs");
const path = require("path");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Listing = require("./models/listings");

// Load environment variables
dotenv.config();

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected for data import"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Function to parse CSV
function parseCSV(filePath) {
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const lines = fileContent.split("\n");
  const headers = lines[0].split(",");

  const data = [];
  for (let i = 1; i < lines.length; i++) {
    if (lines[i].trim() === "") continue;

    const values = lines[i].split(",");
    const obj = {};

    headers.forEach((header, index) => {
      const key = header.trim();
      const value = values[index] ? values[index].trim() : "";

      // Convert data types
      if (key === "availableUnits" || key === "price" || key === "__v") {
        obj[key] = value ? parseInt(value) : 0;
      } else if (key === "wifi" || key === "laundry") {
        obj[key] = value.toLowerCase() === "true";
      } else if (key === "_id") {
        // Skip _id, let MongoDB generate new ones
        return;
      } else {
        obj[key] = value;
      }
    });

    data.push(obj);
  }

  return data;
}

// Import data
async function importData() {
  try {
    const csvPath = path.join(__dirname, "../Data/homelistingsdb.listings.csv");
    console.log("Reading CSV from:", csvPath);

    const listings = parseCSV(csvPath);
    console.log(`Parsed ${listings.length} listings from CSV`);

    // Clear existing data
    await Listing.deleteMany({});
    console.log("Cleared existing listings");

    // Insert new data
    const result = await Listing.insertMany(listings);
    console.log(`Successfully imported ${result.length} listings`);

    process.exit(0);
  } catch (error) {
    console.error("Error importing data:", error);
    process.exit(1);
  }
}

// Run import
importData();
