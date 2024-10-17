import express, { Express, Request, Response, Application } from "express";

const app: Application = express();
const port = process.env.PORT || 8000;

app.get('/', (req: Request,res: Response) => {
    res.send('Welcome to Express & Typescript Server')
})

app.listen(port,() => {
    console.log(`Server is fire at http://localhost:${port}`)
})