// ==UserScript==
// @name         More Commands
// @description  Adds more commands, idk
// @author       Blinking Berry
// @namespace    http://bcmc.ga/authors/blinkingberry/
// @run-at       document-start
// @grant        none
// @include      /^https:\/\/boxcritters\.com\/play\/(index\.html)?([\?#].*)?$/
// @require      https://github.com/SArpnt/joinFunction/raw/master/script.js
// @require      https://github.com/SArpnt/EventHandler/raw/master/script.js
// @require      https://github.com/SArpnt/cardboard/raw/master/script.user.js
// ==/UserScript==

(function () {
	'use strict';
	cardboard.register('moreCommands');
	cardboard.on('loadScriptWorld', function (t) {
		t.innerHTML = t.innerHTML.replace(
            /if\("gear"===i\)return this\.updateGear\(e\);/,
			`
            if ("gear" === i)
				return this.updateGear(e);
            if ("add" === i && !this.player.gear.includes(e))
				return this.updateGear(this.player.gear.concat(e));
            if ("remove" === i || "rm" == i)
				return this.updateGear(this.player.gear.filter(it => {return !e.includes(it)}));
            `
		);
	});
})();