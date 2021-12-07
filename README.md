# Collisions



## Tasks
1. Draw the coin and the bubble on the screen using the values stored in the variables.

2. Using the `collideCircleCircle()` command from p5.collide2D, check to see if the two circles are touching. If the circles are touching, print the message `"TOUCHING"` to the console.

![](assets/Challenge2.gif)

3. Create a function called `randomLocation(coin)` that takes in the coin as a parameter and sets the x and y to a new location. Call the function when the two circles are touching.

![](assets/Challenge3.gif)

4. A sound has been loaded called `found.wav`. Play this sound whenever the use collects the coin.

5. Keep track of the score. Update the score whenever you collect a coin. Display this score on the screen.

![](assets/Challenge5.gif)

6. Create 5 more coins and have them change location on the screen when they are collected

![](assets/Challenge6.gif)

7. Create fake coins that either decrease the score or end the game. If the user touches these coins, you should play a different noise than the `found.wav` you use for the good coins.

![](assets/Challenge7.gif)