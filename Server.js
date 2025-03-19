const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());


mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log(" MongoDB connected successfully!"))
.catch((err) => console.error(" MongoDB connection error:", err));

const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
});

const Contact = mongoose.model("Contact", contactSchema);


app.post("/contact", async (req, res) => {
    try {
        const { name, email, message } = req.body;
        const newContact = new Contact({ name, email, message });
        await newContact.save();
        res.status(201).json({ message: "Message saved successfully!" });
    } catch (error) {
        res.status(500).json({ error: "Failed to save message." });
    }
});


app.get("/", (req, res) => {
    res.send(" Backend is running!");
});


const PORT = process.env.PORT || 5002;
app.listen(PORT, () => {
    console.log(` Backend server running on http://localhost:${PORT}`);
});
