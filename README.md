# Ready, Set Type! &ndash; Typing Speed Test

[Try it out here](https://readysettype.netlify.app/)

Ready, Set, Type! is a React app that challenges you to type as fast as you can. You have sixty seconds to write a randomly generated collection of words and get instant feedback if you typed the right letter each time.

## How Ready, Set, Type! came together

Out of a list of about one thousand common English words a collection of 250 words is created, since the world record of typed words per minute is 216. (I will happily generate more words if you somehow fulfil that task of course!) By typing the first letter into the textarea the timer of sixty seconds starts.

Each letter of the word field is separated in a list to check if each letter of the user is correct. In the end each written word is compared to the wordfield and a score is set. A modal tells the user how many words they typed correctly and a new set of words is generated. You can reset the words and the timer any time. A highscore system tells the player the highest score they got in this session.

Of course you can neither copy the set of words to type nor paste anything into the textarea, so cheating is prohibited. If you find a way to cheat anyway, congratulations, I would love to hear how you have done it so I can make this app a little better. Contact me about it.

## Next Steps?

A global highscore might be nice so that players could compete with each other. Also it would be better if the ad hoc check if the input is correct would reset with each word. If the user misses a letter or types too many letters, the whole rest of the input will be displayed as false, although the correct words will count in the end.

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
