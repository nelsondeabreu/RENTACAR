"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriesRoutes = void 0;
const express_1 = require("express");
const CategoryRepository_1 = require("../repositories/CategoryRepository");
const categoriesRoutes = (0, express_1.Router)();
exports.categoriesRoutes = categoriesRoutes;
categoriesRoutes.post("/", (request, response) => {
    const { name, description } = request.body;
    const Category = new CategoryRepository_1.CategoryRepository();
    Category.create({ name, description });
    response.status(201).send();
});
