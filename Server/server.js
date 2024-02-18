import express from "express";

const app = express();
const port = 2024;

app.use(express.static("../Client"));

app.listen(port, () => {
    console.log("server started ...");
});