var readlineSync=require('readline-sync');
var score=0;
function play(question,answer)
{
    var userAnswer=readlineSync.question(question);
    if(userAnswer===answer){
        console.log("Right");
        score=score+1;
    }else 
    console.log("wrong!!The correct answer would be "+answer);
    console.log("Current Score:"+score);
    console.log("-------------------------------");
}

var questionAnswerBunch=[
{
    question:"Where do I live? ",
    answer:"Faridabad"
},
{
    question:"What I like to Eat",
    answer:"Green Vegetables"
},
{
    question:"Who is my favourite actor? ",
    answer:"Myself"
},
{
    question:" What is my favourite hobby? ",
    answer:"Coding"
},
{
    question:"My Bike Name ",
    answer:"Splendor 100CC"
}
]

for(var i=0;i<questionAnswerBunch.length;i++){
    if(score==2)
        console.log("Hurrah You crossed Level 1 :) ");
    if(score==4)
        console.log("Hurrah You crossed Level 2 :) ")
    play(questionAnswerBunch[i].question,questionAnswerBunch[i].answer);
}
//Final Ranking and Level of User 
if(score>=4)
{
    console.log("You are Level 3 Candidate");
}
else if(score>=2)
{
    console.log("You are Level 2 Candidate");
}
else
{
    console.log("You are Level 1 Candidate");
}
