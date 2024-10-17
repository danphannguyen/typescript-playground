import express, { Express, Request, Response, Application } from "express";
import { IPerson } from "./typeShared/Person";
import { objectDestructuring } from "./test"

const app: Application = express();
const port = process.env.PORT || 3000;

const Person: IPerson = {
    firstname: "Dan",
    lastname: "Phan Nguyen",
    age: 19,
    sex: "M"
}

app.get('/', (req: Request,res: Response) => {
    res.send('Welcome to Express & Typescript Server')
    objectDestructuring(Person)
})

app.listen(port,() => {
    console.log(`Server is fire at http://localhost:${port}`)
})