import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
app.use(cors());

mongoose.connect("mongodb://localhost:27017/Tiles_shivam", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.error("MongoDB connection error:", err));

const TileSchema = new mongoose.Schema({
  company: String,
  size: String,
  category: String,
  name: String,
  img: String,
});

const Tile = mongoose.model("Tile", TileSchema, "Tiles_data");


app.get("/api/Tiles_data", async (req, res) => {
  try {
    const tiles = await Tile.find();
    res.json(tiles);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
