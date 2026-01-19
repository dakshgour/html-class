const express = require("express");
const app = express();

// Serve CSS
app.use(express.static("public"));

// Home route
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

// Backend logic (dummy data)
app.get("/users", (req, res) => {
    res.json({
        totalUsers: 120,
        activeUsers: 95
    });
});

// Server
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
