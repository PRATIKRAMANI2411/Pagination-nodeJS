import express from "express";
import { createPost, posts } from "../controller/postController.js";

const route = express.Router();

route.post("/create", createPost);
route.get("/posts", posts);

export default route;