/*
John and Mike both play basketball in different teams. In the latest 3 games, 
John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀
*/

const averageJohn = (60 + 80 + 103) / 3;
const averageMike = (55 + 80 + 103) / 3;
const averageMary = (81 + 80 + 103) / 3;

console.log(averageJohn, averageMike, averageMary);

if (averageJohn > averageMike && averageJohn > averageMary){
  console.log(`John's team won!! with an average of ${averageJohn}`);
} else if (averageMike > averageJohn && averageMike > averageMary){
  console.log(`Mike's team won!! with an average of ${averageMike}`);
} else if (averageMary > averageJohn && averageMary > averageMike){
  console.log(`Mary's team won!! with an average of ${averageMary}`);
} else if (averageMike === averageJohn && averageMike === averageMary){
  console.log(`John's team made: ${averageJohn}, Mike's team made: ${averageMike} 
  and Mary's team made: ${averageMary}. There is a triple tieee!!! `);
} else if (averageJohn === averageMike && averageJohn > averageMary){
  console.log(`John's team and Mike's team made the same points ${averageJohn}
  and there is a tie between them!`);
} else if (averageMary === averageMike && averageMary > averageJohn) {
  console.log(`Mary's team and Mike's team made the same points ${averageMary}
  and there is a tie between them!`)
} else {
  console.log(`John's team and Mary's team made the same points ${averageJohn}
  and there is a tie between them!`)
}
  
