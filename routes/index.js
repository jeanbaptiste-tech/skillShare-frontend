import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.render("layout", { title: "Acceuil", view: "pages/home" });
});

router.get("/incription", (req, res) => {
  res.render("layout", { title: "Inscription", view: "pages/register" });
});

export default router;
