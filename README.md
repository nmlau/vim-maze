# VimGame

[1*] Design Game
-vim based game
-given a piece of text, randomly picked from a text, can earn more lines of text to move within
-given basic keys, pickup/earn more keys
-have to dodge projectiles, and shoot projectiles to kill attackers

Top of Screen:
-Enemies, strafe and shoot

Bottom of Screen:
-Boxes that can be filled with letters, can shoot, let's start here

# VimMaze

[1*] Design Game
-vim based game
-timed game
-navigate maze with vim commands
-Load game with Lorem Ipsum text
-Powerup items sitting around with progressively more powerful commands

[2**] Think about Design for Game
-Small game first
-Setup grid
-Put ball in grid

Vim Cheatsheets with nice progression, http://goo.gl/4MgL
-Follow this progression for powers you can pick up

==================== Todo ====================

Active:
[1] Setup proper boot, load, etc

Todo:
[1] Get rid of magic numbers
[1] Remap keys
[2] Load Text
[1] Setup Items

Done:
[1] Put goals at better places
[1] Design movement (with better understanding of this)
[4] Refactor (how do you split into modules, look through reintro)
[2] Fix level changing
[4] Study how javascript works, how files work together, how states work
[1] Add second level
[1] Json Map generator, make third level
[1] Checkdirections for collision with walls
[1] Add timer
[2] Host on octopress (mess around with cross origin loading)
[1] Add to js blog post
[1] Clean up timer text, change color
[0] Finish game: Score and Alert

==================== Learned ====================

How to run locally, http://goo.gl/Ero6mP
-Better way to run (host) locally with python, http://goo.gl/CrVg
-Alternatives to hosting locally, http://goo.gl/KZ17S2
-Chrome seems to cache maze.json so it's awkward to update, clear applicable browsing data or use incognito
-Apparently hosting images locally on octopress/heroku server doesn't need jsfiddle cross origin loading either...

How to change sprites size, http://goo.gl/UrKirI

Putting a repo to be hosted on octopress is problematic, it will see it as a submodule which does work for things like themes

Debugging Javascript, http://goo.gl/QFm9dJ
-Debugger;
-Chrome Developer Console

==================== Notes ====================

-Overlap to finish level since collision only works when using velocity, http://phaser.io/docs/2.4.4/Phaser.Physics.Arcade.html#overlap
-Tiled Map Editor, http://goo.gl/E28Imc
-Json maps with raw data instead of base64 compression, http://goo.gl/vLzhPP
-TileMap to get tile you're trying to move to then check its index to see if its a wall or not, https://goo.gl/I3h52i
-Changing text color with style object, http://phaser.io/examples/v2/text/colored-characters
-game.world.removeAll() in between levels, http://goo.gl/2wyE7Z
-Phaser docs: http://phaser.io/docs/2.4.4/index
-Tutorial on grid: http://phaser.io/tutorials/coding-tips-005

[1] Phaser OOP
-Searching 'phaser organize code into classes' finally got some good results
-When testing with alert(), don't hit prevent additonal dialogues and forget
-(What I followed) Multifile game example from forums, http://goo.gl/07D2m7
-Discussion of code organization, how Phaser is flexible, and how games final form should be one single minified js file (script tags), http://goo.gl/8iWPjQ
-Pass in method not method() or else it will just execute the line, http://goo.gl/FNJfc3
-Phaser.js better than min.js for debugging since I can actually read the source

==================== Brick Walls ====================

Figuring out how to do OOP with Phaser
-There's no import manager like most other frameworks

Learning to pass around 'this' properly