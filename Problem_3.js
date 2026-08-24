//Problem-03: Weekly Expense Tracker
const calculateWeeklyTotal = (expenses : number[]) : number => {
    let total = 0 ;
    for (let i = 0 ; i < expenses.length ; i++ )
    {
        total = total + expenses [i];
    }
    return total ;
};