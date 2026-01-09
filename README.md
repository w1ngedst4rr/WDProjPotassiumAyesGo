# CS3_Project
Project Proposal

**LOOT & LEARN**
*Roll, Review, Reward*

 > Dive into the core features: The Quest Game. Select your pack, roll the virtual dice, and successfully answer flashcards to complete tiles on the board. Once you’ve mastered the subject and completed the board, you’re rewarded with a thrilling Card Unboxing, a virtual pack containing collections cards to display in your Cards Display vault. Start building your knowledge deck and level up your learning today!

### Favicon
![Favicon](Assets/image-1.png)

# Webpages

1. HOME:  
> This is the primary landing page, designed to immediately engage the user. It features the prominent titles, Loot and Learn: Roll. Review. Reward., followed by a concise two-paragraph description explaining the gamified flashcard concept. The page's main interaction point is a large, central "Start Your Quest" button linking directly to the Creating Flashcards page. Additionally, it includes a visual section displaying a rotating preview of the collectible cards users can unlock as an incentive.

> Wireframe
![Wireframe](Assets/image-2.png)

2. CREATING FLASHCARDS: 
> This is the content management hub. Users will find a clean interface to build new study decks. Key elements include an input field for the Pack Name (e.g., Physics Formulas), a form area to input the Question and Answer for individual cards, and an "Add Card" button. A dynamic list displays all cards currently in the pack. Once content is complete, two clear calls to action are provided: "Save Pack" and "Save and Start Game" (linking directly to the Game page).

> Wireframe
![Wireframe](Assets/image-3.png)

3. GAME: 
> The highly interactive page where the core application logic resides. This page displays the visual Game Board (a grid of tiles) that tracks the user's progress. A dedicated area features the Dice Roll Mechanic, including an animated dice graphic and the "Roll Dice" button (the primary point of JavaScript interaction). After rolling, a dynamic Flashcard Display Area appears, showing the question, followed by user buttons to indicate if they answered "Correct" or "Incorrect." The page continually shows the user's progress (e.g., Tiles Completed: 5/15).

> Wireframe
![Wireframe](Assets/image-4.png)

4. CARD UNBOXING: 
> This page provides the rewarding culmination of completing a study quest. It is a transitional, celebratory screen that appears only after a user wins the Game. The main feature is a full-screen animated sequence of a pack being opened (e.g., a chest or foil pack). The final result is the reveal of the amount of randomly earned collectible cards, displayed clearly with accompanying celebratory text. A final button, "View My Collection," guides the user to the next logical page.

> Wireframe
![Wireframe](Assets/image-5.png)

5. CARDS DISPLAY: 
> This functions as the user's permanent achievement gallery and profile showcase. The page prominently features the user's entire collection of earned collectible cards organized in a responsive, filterable grid layout. Each displayed card shows its artwork, name, and rarity level. This page reinforces the incentive loop by allowing users to admire their progress and encourages them to start a new quest, with a button linking back to the Creating Flashcards page.

> Wireframe
![Wireframe](Assets/image-6.png)

 ### The JS will mostly be used in...
1. Switching between webpages
2. Randomizing of the number of steps (i. e. rolling the die)
3. Randomizing which flashcard will be given to the player.
4. Verifying whether the answer input by the user is correct.
5. Saving which cards are obtained by the user.

### Wireframe:
https://www.canva.com/design/DAG3KtN5EP8/0yxQ9--fSg6Z3Cj9x0veTA/edit

-------------------------------------------

# Q3 Proposal Update

## Loot & Learn

## Features: (3 min)
* Works on all devices
* Cards transport throughout all websites
* Has a luck-based card system

## Details (project-specific)
* For the cards, we will be creating main designs for them while using css to make them look better.
* Each card will be assigned a number so that the cards are easy access in all webpages. 
* For the luck based card systems, we will be using Javascript (Most likely the "Math.Random()* function) in order to ensure that the user obtains a completely random card.
* Most cards will belong to a themed collection that would activate cool stuff using Javascript if-else checkers and HTML classes to give the users more motivation to keep playing.
* For the flashcards, more customizability will be added to them by adding HTML buttons that change the color/theme of the flashcard being created.
* The flashcards will also be rearranged alphabetically/numerically based on group upon loading using Objects and if-else statements.
* The option to delete and name groups will also be made to the webpage. 
* On the homepage, cards already obtained by the player will randomly appear and move along the page using CSS animations.
* Flexbox and Grid will be used to make webpages compatible on all devices.


## definition of done
* when all 3 features have been accomplished, and maybe even more :D