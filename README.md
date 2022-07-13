# Wordle Hacker
https://wordlehacker-fc916.web.app/

### Computer Demo
https://user-images.githubusercontent.com/60244026/178816906-a2b966df-06d3-42c8-9b07-72599191276d.mp4

### Mobile Demo
https://user-images.githubusercontent.com/60244026/178817816-aceba792-ceca-495b-aa1e-63def170e4ec.mp4

## Description 
Wordle, but with the option of hints. The hint button generates every valid word at that point in the game and ranks them.

## The Stack
Built with React, hosted by firebase, and utilizes JS module sweeetalert for stylish alerts

## Challenges
Originally I generated the valid words through a recursive backtracking algorithm and then compared each one to all others in order to claculate its score. However, this is every inefficent. 

I instead used an algorithm that would invalidate words inside the current list of valid words to create the new list of valid words. Then it creats a 2D lookup table that contains the number of occurences of each letter in positions 1-5, since they are 5 letter words. From there, to score each word it checks to see how common the word is to other valid words, as a word that is common to the most words will on average statistically reveal/invalidate the most words on the valid list.

In all, the runtime was reduced from O(S^2 * L^2 + 26^L) to O(S * L)

# Run Porject
Clone the project, install dependencies, yarn start
This will start the webiste on your local server

This project utilizes the MIT License, so change this project however you want and good luck!
