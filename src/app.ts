import express, {NextFunction, Request, Response} from 'express'
import { request } from 'http';
import { start } from 'repl';

const app =  express();

const PORT = 3000;

let resName: string = "Start";


const middleware = ({name}: {name: string})=> 
(req: Request, res: Response, next: NextFunction) => {
    resName += name;
   
    next();
}
// register
app.use(express.json())
app.use(middleware({name: " Nico"}))



app.get("/books/:bookId/:authorId", 
(req: Request, res: Response, next: NextFunction) => {

    console.log(resName);
    res.send(resName)
})

app.listen(PORT, ()=> {
    console.log("Server runs on http://localhost:" + PORT);
    
})