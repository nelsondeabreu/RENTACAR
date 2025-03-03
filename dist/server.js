"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const categories_routes_1 = require("./routes/categories.routes");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/categories", categories_routes_1.categoriesRoutes);
app.listen(2525, () => {
    return console.log("Server is running.");
});
