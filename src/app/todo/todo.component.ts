import { Component, OnInit } from '@angular/core';
import { Model } from '../model';
import { TodoItem } from '../todoItem';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  model = new Model();

  message=""
  inputText:string="";

  displayAll:boolean=false;

  constructor() {  
    this.model.items=this.getItemsFromLS();
  }

  ngOnInit(): void {
  }

  addItem(){
    if (this.inputText) {
      let data= {description:this.inputText, action:false}
       this.model.items.push(data);

       let items=this.getItemsFromLS();
       items.push(data);
       localStorage.setItem("items",JSON.stringify(items));

       this.inputText="";
    } else {
      alert("bilgi giriniz!!!")
    }
  }

  getItemsFromLS(){
    let items:TodoItem[] = [];
     let value = localStorage.getItem("items");

     if (value !=null) {
       items= JSON.parse(value);
     }

     return items;
  }

  onActionChanged(item:TodoItem){
    let items = this.getItemsFromLS();

    localStorage.clear();

    items.forEach(i=>{
      if (i.description == item.description) {
        i.action = item.action
      }
    });

    localStorage.setItem("items",JSON.stringify(items));
  }

  getItems(){
    if (this.displayAll) {
       return this.model.items;
    } else {
      return this.model.items.filter(item=> !item.action)
    }
  }

  displayCount(){
    return this.model.items.filter(item=> item.action).length;
  }

  getBtnClasses(){
    return {
      'disabled':this.inputText.length==0, 
      'btn-secondary': this.inputText.length==0,
      'btn-success' : this.inputText.length>0
  }
  }
}
