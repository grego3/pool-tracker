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

Custom Module List:
 * gamecontenttype
 * Pool Tracker
 
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
 * CSS Preprocessor: SASS compiles with Compass

Potential Next Steps
-------------------------------
 * Programmatically limit the "Winner" select box when playing a game to the chosen players.
 * Create a "My Games" view page
 * Improve design and user experience


Issues
-----------------
 * [UNRESOLVED] Leaderboad view not displaying 'user-wins' field
 * [UNRESOLVED] "Winner' select box needs to display only chosen players
