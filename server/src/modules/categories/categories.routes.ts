import express from "express";
import categoriesController from "./categories.controller"
import { validateSchema } from "../../middleware/validateSchema";
import { categorySchema } from "./categories.schema";
const { createCategory, getAllCategories, updateCategory, deleteAllCategories, loadCategories } = categoriesController;

const categoriesRoutes = express.Router();

categoriesRoutes.post("/", validateSchema(categorySchema), createCategory);
categoriesRoutes.get("/",  getAllCategories);
categoriesRoutes.put("/:id", updateCategory);
categoriesRoutes.post("/loadCategories", loadCategories);
categoriesRoutes.delete("/", deleteAllCategories);

// ratesRoutes.delete("/:id", deleteRate);

export default categoriesRoutes;