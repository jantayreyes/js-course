'use strict';

/**
Let's continue with our football betting app! Keep using the 'game' variable from
before.
Your tasks:
1. Loop over the game.scored array and print each player name to the console,
along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already
studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them
(except for "draw"). Hint: Note how the odds and the game objects have the
same property names �
4. Bonus: Create an object called 'scorers' which contains the names of the
players who scored as properties, and the number of goals as the value. In this
game, it will look like this:
{
 Gnarby: 1,
 Hummels: 1,
 Lewandowski: 2
}
GOOD LUCK �

 */

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },
  };

// 1)
const totalScore = Object.entries(game.scored)
console.log(totalScore);
for (const [goalNumber, name] of totalScore) {
  console.log(goalNumber);
  console.log(name);
  console.log(`"Goal ${(goalNumber * 1) + 1}: ${name}"`);
};

//THIS IS BETTER SOLUTION, in arrays we use the entries method to get the entries of the array, in objects we have to use Object.entries and then pass the function that we want to.
for (const [i, player] of game.scored.entries()) {
  console.log(i);
  console.log(player);  
  console.log(`Goal ${i + 1}: ${player}`);
}


// 2)
const odds = Object.values(game.odds)
console.log(odds);
let average = 0
for(const odd of odds) {
  average += odd
}
average/= odds.length
console.log(average);

// 3)
const [team1, x, team2] = Object.entries(game.odds)
console.log(team1, x, team2);
console.log(`Odd of victory ${game.team1}: ${team1[1]}`);
console.log(`Odd of draw: ${x[1]}`);
console.log(`Odd of victory ${game.team2}: ${team2[1]}`);

for (const [team, odd] of Object.entries(game.odds)) {
  console.log(team);
  console.log(odd);
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}

// 4)
// So the solution is to loop over the array, and add the array elements as object properties, and then increase the count as we encounter a new occurence of a certain element

const scorers = {};
for (const player of game.scored) {
  console.log(player);
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}