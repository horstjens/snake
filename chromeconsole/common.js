/*

IMPORTANT STUFF

This plugin lets you use some of Playtomic's features, such as counting the number of people who have played your game, or died on level X. You will need a Playtomic  account to use it in your project. Not all Playtomic features are supported (see below for details).

!!!This is not an official Playtomic plugin!!!
!!!This is not an official Scirra or Construct 2 plugin!!!

It's just something quick I made out of necessity. It probably has bugs. We are not
guaranteeing that it will work, or that we will fix it.

The Playtomic documentation recommends that you obfuscate the project's SWFID, GUID & APIKEY but this plugin makes no attempt to do so! USE AT YOUR OWN RISK. Personally, I think if somebody cares enough to try to find them, they probably will do so even if it's obfuscated.

DEMO

A live demo that shows the plugin in action can be seen at:
http://www.funstormgames.com/blog/playtomic-for-construct-2-plugin

DOWNLOAD & INSTALLATION

Download from: http://www.funstormgames.com/blog/playtomic-for-construct-2-plugin
Copy the 'playtomic' folder to '<you Construct 2 install directory>\exporters\html5\plugins'.
Then you can use the plugin from within Construct 2.

TUTORIAL

1) Add a Playtomic object to your Construct 2 project
2) Create a Playtomic account and project at http://www.Playtomic.com
3) From your project's settings on the Playtomic website, copy the SWFID, GUID & APIKEY
4) Enter the SWFID, GUID & APIKEY in the Construct 2 Playtomic object properties
5) When you start the project, the plugin will now try to connect to the Playtomic servers and increase the number of 'Views' by 1.
6) Note: always check to make sure that Playtomic is ready before using the other features. It takes a short moment for the plugin to load, so it will not be ready immediately after layout start.

SUPPORTED PLAYTOMIC FEATURES

- Load Api from remote location
- Log View
- Log Play
- Log Counter Metric
- Data Lookup Views
- Data Lookup Plays
- Data Loopup PlayTime
- Leaderboards

UNSUPPORTED PLAYTOMIC FEATURES

- Load Api from local location if remote is unavailable
- Additional request options
- Error reporting
- ForceSend, Freeze/Unfreeze
- CustomMetric
- Level Average/Ranged Metric
- Heatmaps
- Facebook Leaderboards
- Link tracking
- Level sharing
- GameVars
- Geolocation
- Data Lookup Custom/Level Metrics
- Parse database

LICENSE

This plugin has no license. Do whatever you want with it... use commerically, modify,
redistribute, etcetcetc. You don't have to, but it would be nice if you included
somewhere that you got it from:

http://www.funstormgames.com/

DEMO PROJECT ART THANKS TO

Backyard Ninja (Goblin) http://www.dumbmanex.com/
flaivoloka (Main Menu Background) http://www.sxc.hu/profile/flaivoloka

QUESTIONS, COMMENTS, FEEDBACK, BUGS

Please let me know if you find a bug and I will do my best to fix it. I don't have enough time to add all the Playtomic features, so if you need a specific feature and know a little JavaScript, feel free to modify the plugin and add it yourself :)

*/