const express = require("express");
const { connectToMongoDB } = require("./connect");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
dotenv.config();
// const cors = require('cors');

// Importing Routes
const authRoutes = require("./routes/auth");
const appointmentRoutes = require("./routes/appointment");
const serviceRoutes = require("./routes/services.js");
const doctorRoutes = require("./routes/doctors.js");
const cartRoutes = require("./routes/cart.js");
const blogRoutes = require("./routes/blog.js");

const app = express();

// // Middleware
// app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));

// Home route
app.get("/", (req, res) => {
  res.send("Welcome to the EliteCare Backend API");
});

// API Routes
app.use("/api/auth", authRoutes);
app.use('/api/appointments', appointmentRoutes);
// app.use('/api/services', serviceRoutes);
// app.use('/api/doctors', doctorRoutes);
// app.use('/api/cart', cartRoutes);
// app.use('/api/blog', blogRoutes);



// Start the server

const PORT = process.env.PORT || 5000;
connectToMongoDB("mongodb://127.0.0.1:27017/eliteCare")
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });
