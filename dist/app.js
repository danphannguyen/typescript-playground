"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const test_1 = require("./test");
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
const Person = {
    firstname: "Dan",
    lastname: "Phan Nguyen",
    age: 19,
    sex: "M"
};
app.get('/', (req, res) => {
    res.send('Welcome to Express & Typescript Server');
    (0, test_1.objectDestructuring)(Person);
});
app.listen(port, () => {
    console.log(`Server is fire at http://localhost:${port}`);
});
