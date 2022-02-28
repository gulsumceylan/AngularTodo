import { TodoItem } from "./todoItem"

export class Model{
    name:string;
    items:TodoItem[];

  
    constructor() {
        this.name="Ceyli"
        this.items=[
            {description:"Kahvaltı", action:true},
            {description:"Spor", action: true},
            {description:"Alışveriş", action:false}  
        ]
    }
}