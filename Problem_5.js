//Problem-05: Quiz Score Summary
type QuizSummary = 
{
    total : number 
    average : number 
}

const getQuizSummary = (scores : number []) : QuizSummary => { if(scores.length === 0){return{total : 0 , average: 0 }} 

let total = 0 
for (let i = 0 ; i < scores.length ; i++){total = total + scores [i]}

let average = total / scores.length

return {total : total , average: average}
};
