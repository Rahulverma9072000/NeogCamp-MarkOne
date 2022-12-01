//I have to use repl.it 
//Currently I am doing Level One Projects
//2 types of interface -> Graphical and Command Line 
//CLI -> Command Line Interface 
//Output your Name 
// console.log("Rahul Verma");
//Adding readlineSync() this is predefined library 
//that is used to take input from the user 
//Synchronous readline for interactively running to have a conversation with a user via console
//readlineSync tries to let your script have a conversation with the user via console
// Upto Exercise 3
// var readlineSync = require('readline-sync');
// var username = readlineSync.question("May I know your Good Name ?");
// console.log(username);
// var welcomeMssg = "Welcome "+ username;
// console.log(welcomeMssg);

//Exercise 4 Do it all together 
// var readlineSync = require("readline-sync");
// var userName = readlineSync.question("Tell Me your Name ?");
// console.log("Welcome "+userName);va

//Exercide 5 
// var readlineSync = require("readline-sync");
// var myAge = readlineSync.question("Am I older than 25 ?");
// //processing 
// if(myAge=="yes"){
//     console.log("Yes I am older than 25");
// }else{
//     console.log("Yess I am young now");
// }

//Exercise 6 
// var readlineSync = require("readline-sync");
// var myhometown = readlineSync.question("Your Hometown ?");
// var score = 0;
// if(myhometown=="Bokaro"){
//     score+=1;
// }
// console.log("Your Score",score);

//Exercise 7 
//2,3 are function parameter
//a,b are function argument
// function add(a,b)
// {
//     return a+b;
// }
// console.log(2,3);

// //Exercise 8
// var readlineSync = require("readline-sync");
// var score = 0;
// function play(question,answer)
// {
//     var userAnswer = readlineSync.question(question);
//     if(userAnswer==answer)
//     {
//         console.log("Yess");
//     }
//     else{
//         console.log("No");
//     }
// }
// //Calling the Function 
// play("Where do you live ","Faridabad");

//Exercise 9 
// for(var i =0;i<5;i++)
// {
//     console.log("Rahul Verma");
// }

// //Exercise 10 Star Pattern 
// //Normal 
// for(var i=1;i<=5;i++)
// {
//     var row = "";
//     for(var j=1;j<=i;j++)
//     {
//         row+="*";
//     }
//     console.log(row);
// }
// //Inverted 
// for(var i=5;i>=1;i--)
// {
//     var row = "";
//     for(var j=1;j<=i;j++)
//     {
//         row+="*";
//     }
//     console.log(row);
// }

// //Exercise 10 and 11 
// //Data Structure Starting 
// //List Grocery items to buy list 
// var groceryList = ["milk","egg","bread","butter","vegetables"];
// //To print 1 element from a index counting starting from 0
// console.log(groceryList[0]);
// //Print the whole list
// for(var i=0;i<groceryList.length;i++)
// {
//     console.log(groceryList[i]);
// }

// //Exercise 12 
// //Everything in JS is objects 
// //I am creating the objects of superheroes
// var superman = {
//     name : "Superman",
//     age: "100",
//     health_precent : "98"
// }
// var batman = {
//     name: "batman",
//     age: "102",
//     health_precent : "99"
// }

// // console.log(superman.health_precent);
// // console.log(batman.age);

// //Creating a list of objects
// var superheroes = [batman,superman];
// for(var i =0;i<superheroes.length;i++)
// {
//     var currHero = superheroes[i];
//     console.log(currHero.name);
//     console.log(currHero.age);
// }

var readlineSync = require("readline-sync");
var score = 0;
var userName = readlineSync.question("What is your Name ?");
console.log("Welcome "+userName);
//Play function 
function play(question,answer){
    var userAnswer = readlineSync.question(question);
    if(userAnswer==answer)
    {
        console.log("Right bro");
        score+=1;
    }
    else
    {
        console.log("Wrong");
    }
}
var questions = [
    {question : "Where do I live",answer :"Faridabad"},
    {question: "What i like to eat",answer:"Green Vegetables"}
]
//running a loop to ask queries 
for(var i=0;i<questions.length;i++)
{
    var currQuestion = questions[i];
    play(currQuestion.question,currQuestion.answer);
}
//Final Score
console.log("Your Final Score is "+score);
