import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  public name="Prateek";
  public site= window.location.href;
  public myID="testID";
  public isSpecial="true";
  public hasError=false;
  public messageClasses={
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }

  public highlightColor="orange";
  public greetmsg="";
  public aa= "";
  constructor() { } 

  ngOnInit(): void {
  }

  greetMsg()
  {
    return "Helllo"+ this.name;
  }
  onClick(){
    console.log("welcome to code evolution");
    this.greetmsg="Welcome to code Evolution";
  }
  Click11(event){
    console.log(event);
    this.aa= event.type;
  }
  public user="";
  logMessage(value){
    this.user=value;
  }

  //TWO WAY DATA BINDING
  public name1= "";

  //STRUCTURAL DIRECTIVE 
  public displayName=true;
  public color="red";

  public colorss= ["red","blue","green","yellow"];

 //COMPONENT INTERACTION 
 //app component se prateek bhej k iss component m display using @INPUT() decorator
 //iss component se hey codeEvolution bhej k appComponent m display using @OUTPUT() decorator
 //parent to child - @INPUT() ,  input ko import krege angular core se 
 //child to parent - @OUTPUT()

 @Input('parentData') public name111;



//PIPES
public ame="code EVOLUTIONNNN";
public person={
  "firstname": "john",
  "lastname": "sharma"
}
public date=new Date();



public aaa="";
public aaa1="";

callEmployeeList()
{
  this.aaa="true"
  
}
callEmployeeDetail()
{
  this.aaa1="true";
}
}


