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
	let modData = cardboard.register('betterInventory');

	modData = {
		scale: 3,
		critterScale: .5,
		sortMethod: "itemId",
	};

	modData.width = Math.min((855 - 40) - modData.critterScale * 440 * .4886363636363636, 760);
	modData.height = 400;
	modData.rows = Math.floor(modData.scale * modData.height / 200);
	modData.columns = Math.floor(modData.scale * modData.width / 200);

	cardboard.on('loadScriptWorld', function (t) {
		t.innerHTML = t.innerHTML.replace(
            'if("gear"===i)return this.updateGear(e);',
			`
            if ("gear" === i) return this.updateGear(e);
            if ("add" === i) return this.updateGear(this.player.gear.concat(e));
            if ("remove" === i || "rm" == i) return this.updateGear(this.player.gear.filter(it => {return it !== e}));
            `
		);
	});
})();