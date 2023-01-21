# gwent-classic-v3.0
![cover](https://user-images.githubusercontent.com/26311830/116256903-f1599b00-a7b6-11eb-84a1-16dcb5c9bfc6.jpg)

A browser remake of the original Gwent minigame from The Witcher 3: Wild Hunt including all cards from the DLC.<br/>Click [here](https://romain-durban.github.io/gwent-classic-v3.0/) to play.

In addition to cloning the original game, various cards, faction, abilities and features have added to push the game even further.

## Improvements

Are listed here only the modifications done in this present fork, more were done before by other developers.

- Completly reorganized the definition of cards and the way they are used so that it is less hardcorded (like checking the name of the card to run some effects, not great)
  - Now more cards of any ability can be added and will work right away
- Better UI to select multiple cards in the carousel
- Visual of cards is now completly generated, we only need the base picture, rest is taken from the configuration of cards
  - This makes it a lot easier to add more cards or to tweak them
- Now all cards have a quote
  - However long quotes sometimes do not display very well
- We can now put several special cards in a row
- We can now select a deck among the premade ones
- We can now select the AI deck, or set it back to random
- Various more balanced and fun decks are now configured and usable
  - A dedicated page explain the methodology and lists the decks
- Improved AI a little, but it's still not very smart
- A page now explains the rules
- Improved compatibility with Firefox (would only work on Chrome before)

### Operations included with the keyboard:

**"E"** starts the game<br />
**"X"** uses or modifies the leader card<br />
**"Q"** closes the card explanation windows<br />
**"Space"** passes the round<br />
**"Enter"** plays the cards<br />
**Arrows** select cards on the carousel