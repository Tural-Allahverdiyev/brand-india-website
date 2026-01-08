import express from "express";
import cors from "cors";
import "dotenv/config";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ ok: false, message: "Bütün xanaları doldurun." });
  }

  // TODO: DB insert (Mongo/Postgres)
  return res.json({ ok: true, message: "Mesaj qəbul olundu." });
});

app.listen(5000, () => console.log("API running on http://localhost:5000"));
