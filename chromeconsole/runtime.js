/*

IMPORTANT STUFF

This Construct 2 mini-plugin for Chrome fanatics (like me!) let's you log things to the JavaScript console.

!!!This is not an official Google Chrome plugin!!!
!!!This is not an official Scirra or Construct 2 plugin!!!

It's just something quick I made out of necessity. It probably has bugs. We are not
guaranteeing that it will work, or that we will fix it.

DEMO

A live demo that shows the plugin in action can be seen at:
http://www.funstormgames.com/blog/construct-2-log-to-chrome-console-plugin

DOWNLOAD & INSTALLATION

Download from: http://www.funstormgames.com/blog/construct-2-log-to-chrome-console-plugin
Copy the 'playtomic' folder to '<you Construct 2 install directory>\exporters\html5\plugins'.
Then you can use the plugin from within Construct 2.

TUTORIAL

1) Add a Chrome Console object to your Construct 2 project
2) Press Ctrl+Shift+J to bring up the JavaScript console or select Wrench->Tools->JavaScript Console
3) To log numbers or text add action -> Chrome Console -> Log Text
4) To log objects add action -> Chrome Console -> Log Object

LICENSE

This plugin has no license. Do whatever you want with it... use commerically, modify,
redistribute, etcetcetc. You don't have to, but it would be nice if you included
somewhere that you got it from:

http://www.funstormgames.com/

QUESTIONS, COMMENTS, FEEDBACK, BUGS

Please let me know if you find a bug and I will do my best to fix it.

*/

// ECMAScript 5 strict mode
"use strict";

assert2(cr, "cr namespace not created");
assert2(cr.plugins_, "cr.plugins_ not created");

/////////////////////////////////////
// Plugin class
// *** CHANGE THE PLUGIN ID HERE *** - must match the "id" property in edittime.js
//          vvvvvvvv
cr.plugins_.chromeconsole = function(runtime)
{
	this.runtime = runtime;
};

(function ()
{
	/////////////////////////////////////
	// *** CHANGE THE PLUGIN ID HERE *** - must match the "id" property in edittime.js
	//                            vvvvvvvv
	var pluginProto = cr.plugins_.chromeconsole.prototype;
		
	/////////////////////////////////////
	// Object type class
	pluginProto.Type = function(plugin)
	{
		this.plugin = plugin;
		this.runtime = plugin.runtime;
	};

	var typeProto = pluginProto.Type.prototype;

	// called on startup for each object type
	typeProto.onCreate = function()
	{
	};

	/////////////////////////////////////
	// Instance class

	pluginProto.Instance = function(type)
	{
		this.type = type;
		this.runtime = type.runtime;
		
		// any other properties you need, e.g...
		// this.myValue = 0;
	};
	
	var instanceProto = pluginProto.Instance.prototype;

	// called whenever an instance is created
	instanceProto.onCreate = function()
	{
		// note the object is sealed after this call; ensure any properties you'll ever need are set on the object
		// e.g...
		// this.myValue = 0;
	};
	
	// only called if a layout object - draw to a canvas 2D context
	instanceProto.draw = function(ctx)
	{
	};
	
	// only called if a layout object in WebGL mode - draw to the WebGL context
	// 'glw' is not a WebGL context, it's a wrapper - you can find its methods in GLWrap.js in the install
	// directory or just copy what other plugins do.
	instanceProto.drawGL = function (glw)
	{
	};

	//////////////////////////////////////
	// Conditions

	pluginProto.cnds = {};
	var cnds = pluginProto.cnds;
	
	//////////////////////////////////////
	// Actions

	pluginProto.acts = {};
	var acts = pluginProto.acts;
	
	acts.log = function (data, dataObject) {
		console.log(data);
	}
	
	//////////////////////////////////////
	// Expressions

	pluginProto.exps = {};
	var exps = pluginProto.exps;

}());