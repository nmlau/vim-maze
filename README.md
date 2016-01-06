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

Done:
[1] Add second level
[1] Json Map generator, make third level
[1] Checkdirections for collision with walls
[1] Add timer
[2] Host on octopress (mess around with cross origin loading)
[1] Add to js blog post
[1] Clean up timer text, change color
[0] Finish game: Score and Alert

Todo:
[2] Refactor (how do you split into modules, look through reintro)

==================== Learned ====================

How to run locally, http://goo.gl/Ero6mP
-Better way to run (host) locally with python, http://goo.gl/CrVg
-Alternatives to hosting locally, http://goo.gl/KZ17S2
-Chrome seems to cache maze.json so it's awkward to update, clear applicable browsing data or use incognito

How to change sprites size, http://goo.gl/UrKirI

Putting a repo to be hosted on octopress is problematic, it will see it as a submodule which does work for things like themes

==================== Notes ====================

-Overlap to finish level since collision only works when using velocity, http://phaser.io/docs/2.4.4/Phaser.Physics.Arcade.html#overlap
-Tiled Map Editor, http://goo.gl/E28Imc
-Json maps with raw data instead of base64 compression, http://goo.gl/vLzhPP
-TileMap to get tile you're trying to move to then check its index to see if its a wall or not, https://goo.gl/I3h52i
-Changing text color with style object, http://phaser.io/examples/v2/text/colored-characters
-game.world.removeAll() in between levels, http://goo.gl/2wyE7Z