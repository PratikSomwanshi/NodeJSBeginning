const router = require("express").Router();
const apiKeyMiddleware = require("../middlewares/api");

router.get("/", (req, res) => {
    res.render("index", {
        title: "My Home Page",
    });
});

router.get("/about", (req, res) => {
    res.render("about", {
        title: "My About Page",
    });
});

router.get("/products", (req, res) => {
    res.render("products", {
        title: "My Product Page",
    });
});

router.get("/download", (req, res) => {
    res.download("./man.txt");
});

router.get("/api/products", apiKeyMiddleware, (req, res) => {
    res.json({
        name: "Phantom Black",
        id: 1,
    });
});

module.exports = router;
