Title: Pool Tracker
Author: Daniel Laufer
Live Site: http://pool-tracker-dlaufer1.c9users.io/
(Please Note: the first time you visit the live site, the web host may bring up a splash screen warning that this is a cloud development environment. Just click "Preview" to view the site.)

CONTENTS OF THIS FILE
---------------------

 * About Pool Tracker
 * Technology used
 * Potential Next Steps
 * Issues 

ABOUT Pool Tracker
-----------------------
Pool Tracker is my submission for the Pool App Exercise. You can create players, created games between any two existing players, determine the winner, and view leaderboard and games played. I felt the most interesting and relevant challenge would be to develop the pool tracking app in a custom Drupal module. So, while the site may appear standard, the functionality was developed almost entirely in code in two custom modules and styled using a custom subtheme. The directories with customized code are /sites/all/modules/custom/gamecontenttype/, /sites/all/modules/custom/pool_tracker/ and /sites/all/themes/pool_tracker/.

TECHNOLOGY USED
--------------------------

CMS: Drupal 7.x

Base Theme: Bootstrap
Sub-theme: Pool-tracker

Custom Module List:
 * gamecontenttype
    - Creates the Game content type (node entity type)
 * Pool Tracker
    - Adds field "game_wins" to user profile
    - Increments winner's "game_wins" on user profile when a Game is created and saves it back to db
    - Creates the Games view
    - Creates the pool_tracker block in which loads the user login form
    - Include a help page
    - Creates a pooltracker table in the db (which I ended up actually not even using  :)
    
Contrib Module List: 
 * Administration Menu & Administration menu Toolbar style
 * Chaos Tools & Page Manager
 * Devel
 * References & Node Reference & User Reference
 * Entity API and Entity tokens
 * Login Destination
 * Pathauto
 * Token
 * jQuery Update
 * Views & Views UI 
 
OTHER:
 * CSS Preprocessor: SASS compiled with Compass
 * Version Control: Git
 * IDE: Cloud9 development environment
 * Backend: LAMP Stack

Potential Next Steps
-------------------------------
 * Programmatically limit the "Winner" select box when playing a game to the chosen players.
 * Use views pager to display all games, not just recent games
 * Create a "My Games" view page
 * Also record losses and compare best records, not just most wins
 * Improve design and user experience

Issues
-----------------
 * [UNRESOLVED] "Winner" select box needs to display only chosen players
 * [UNRESOLVED] Display '0' instead of nothing in Leaderboard when no games won
 * [RESOLVED] Leaderboad view not displaying 'game-wins' field
