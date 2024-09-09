import express from "express";
//import myWebsite from myWebsite.html
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Hello Dude!</h1>")
    console.log(req.rawHeaders);
});

app.get("/contact", (req, res) => {
    res.send("<h1>Contact number:</h1><p>430-342-3434</p>")
});

app.get("/about", (req, res) => {
    res.send("<h1>About me: My name is Drew</h1>")
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
})
