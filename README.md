# ABOUT

This is a command line application to estimate the amount turns for the battleship 'smart bot' in  https://github.com/RaeWinTan/RXJSLearn (battleship branch) to finish a battleship game as compared to a less efficient 'dumb bot' that just shoots shots base on luck to win the game (using a random number generator).

# HOW TO USE

* **Step 1:** create a folder (for this example I will be using ) bs_test

* **Step 2:** cd into bs_test folder

* **Step 3:** in the bs_test folder type:
```sh
npm install bs_test
```

* **Step 4:** in the same terminal type:
```sh
npx battleship_perfomance st
```

* **Step 5:** Set the parameters. This, the program will guide you.


# GAME RULES

* Use this as reference: https://stackblitz.com/github/RaeWinTan/RXJSLearn/tree/battleship , after initialization, in stackblitz's terminal type `yarn run start`.
* During setup mode, the difference in length between the current ship being placed on the board and the prior ship is one unit. The current ship is smaller. The length of the first ship is the number of ships set in this program. (i.e. if you set the number of ships to 5, the ships placed on the board will be length 5, 4, 3....)     
* The player(smart bot/dumb bot) will know what is the length of the opponent's ship it shot down

# ABOUT THE CODE

* Both the dumb bot and the smart bot is playing against the same opponent's board
* The opponent board is generated randomly per game
* It is not considered a turn if the bot(smart/dumb) shoots a location it shot before

# ACCURACY
* For the most accurate result, all parameters to a high value
* Set grid size and ships to the same value
  * The greater the difference between grid size and ships the more inaccurate the result because the smart bot's probability to hit a ship in a less crowded grid is closer to the dumb bot.
* I ran the program in my computer with grid size, ships, games = 30. The smart bot uses about 16.5% less turns as compared to the dumb bot.
