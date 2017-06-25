Title: Pool Tracker
Author: Daniel Laufer
Live Site: http://test-pool-tracker.pantheonsite.io/


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
 * Administration Menu
 * Chaos Tools & Page Manager
 * Devel
 * References
 * Entity API
 * Login Destination
 * Pathauto
 * Entity Reference
 * Hierarchical Select
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
 * Create a "My Games" view page
 * Also record losses and compare best records, not just most wins
 * Improve design and user experience

Issues
-----------------
 * [UNRESOLVED] Display '0' instead of nothing in Leaderboard when no games won
 * [RESOLVED] "Winner" select box needs to display only chosen players
 * [RESOLVED] Leaderboad view not displaying 'game-wins' field
