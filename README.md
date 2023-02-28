# Game Of Three


When a player starts, it incepts a random (whole) number and sends it to the second
player as an approach to starting the game.
The receiving player can now always choose between adding one of {-1, 0, 1} to get
to a number that is divisible by 3. Divide it by three. The resulting whole number is
then sent back to the original sender.

### Run app in dev mode

-   run `npm install` to install required packages
-   run `npm run dev` to start app with ts-node-dev

the game is reachable at [localhost:3000](http://localhost:3000)

### Run app

-   run `npm install` to install required packages
-   run `npm run build` to build and create target
-   run `npm run start` to start app
