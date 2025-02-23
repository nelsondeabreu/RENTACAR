"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryRepository = void 0;
const Category_1 = require("../models/Category");
class CategoryRepository {
    constructor() {
        this.categories = [];
    }
    create({ name, description }) {
        const category = new Category_1.Category();
        Object.assign(category, {
            name,
            description,
            created_at: new Date().toLocaleDateString()
        });
        this.categories.push(category);
        return category;
    }
    getAll() {
        return this.categories;
    }
}
exports.CategoryRepository = CategoryRepository;
