# Flash Card Game

### Introduction to the Project

This was my first project in Mod2 at Turing School of Software and Design. It was a solo project that I started on 11/18/19 and finished it on 11/21/19. I was given a handful or pre-existing files including pre-built trivia cards and one testing file for the card class. The project required five separate class files each with a constructor instantiating new classes for game functionality. The classes were Card, Deck, Turn, Round, and Game. A large focus of the project was TDD (test driven development). Before I created a method or property for each class, I would write a test using Mocha & Chai to assert an expected outcome and ensure the code ran correctly. I spent some time styling the project beyond the original design to increase readability and make the game more enjoyable to play. The program runs in the mac terminal using only JavaScript. I learned a lot about working with multiple classes while building this program. The most challenging part of this project was deciding what kind of test to write before I implemented the corresponding code. I found this project to be fairly difficult, but also super fun and engaging.

### Project Summary

The project is a trivia game with 30 different computer programming related multiple choice questions. Once the game starts, the user is presented with the first question and three possible answers. The user can use the arrow keys to select an answer, or enter the number corresponding with the desired answer and press enter. After an answer is entered, the program logs the response and replies with a message informing the user that they are correct or incorrect. Once all 30 questions have been answered, the program tells the user their score (a percentage of correct answers) as well as the time it took to complete the game. When the game is finished, the user may exit the game using control+C or quit the terminal application.

### My Comp Screenshots

![my comp pic 1](https://user-images.githubusercontent.com/53405028/69399766-9c098800-0cac-11ea-92c9-0a5c4e5d7ef5.png)

![my comp pic 2](https://user-images.githubusercontent.com/53405028/69399774-a166d280-0cac-11ea-9399-61d3f568533e.png)

![my comp pic 3](https://user-images.githubusercontent.com/53405028/69399786-a6c41d00-0cac-11ea-9a1e-14a8a84fc663.png)

### My Comp .gif

![my comp gif](https://media.giphy.com/media/dypFdllWhBuTl5yb6z/giphy.gif)

### Setup Instructions

Clone down the forked repo (from your GitHub). Since you don't want to name your project "flashcards-starter", you can use an optional argument when you run `git clone` (you replace the `[...]` with the terminal command arguments):

```bash
git clone [remote-address] [what you want to name the repo]
```

Once you have cloned the repo, change into the directory and install the library dependencies. Run:

```bash
npm install
```

To verify that it is setup correctly, run `npm test` in your terminal. You should have 5 pending tests in your `Card` test file that show up.

Running `node index.js` from the root of your project should result in the following message being displayed in your terminal:

```bash
Node server running on port 3000
```

### Example Comp .gif

![flash cards example gif](https://media.giphy.com/media/1zkb1q58eTiTH6D7wc/giphy.gif)
