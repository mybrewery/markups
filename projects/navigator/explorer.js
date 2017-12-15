"use strict";

var Explorer = function (config) {
	this.config = config;
	this.content = [];
	this.position = {
		page : null,
		section : null
	};
	this.pointer = {
		x : 0,
		y : 0,
		prevX : 0,
		prevY : 0,
		hovered : false,
		captured : false
	};
	this.__setupInteraction()
}

Explorer.prototype = {
	eventNames : {
		"mousedown" : "pointerdown",
		"mouseup" : "pointerup",
		"mouseover" : "pointerover",
		"mouseout" : "pointerout",
		"click" : "pointertap",
		"mousemove" : "pointermove",
		"touchstart" : "pointerdown",
		"touchend" : "pointerup",
		"touchmove" : "pointermove"
	},

	__setupInteraction : function() {
		for (var name in this.eventNames) {
			window.addEventListener(name,this.__onUserEvent);
		}
	},

	__onUserEvent : function(eventData) {
		var type = eventData.type;
		if(type == "mousedown") {
			this.pointer.captured = true;
		}
	},

	createSiteFromConfig: function (config) {
		for (var a = 0; a < config.content.length; a++) {
			this.createPage(config.content[a], a)
		}
	},

	createSection 	: function (sectionConfig, pageId) {
		var sectionId = this.content[pageId].children.length;
		var pageNode = this.content[pageId].node;
		var sectionNode = this.createFromTemplate(this.config.sectionTplId);
		this.content[pageId].children.push({
			node : sectionNode,
			config : sectionConfig,
			pageId : pageId,
			sectionId : sectionId
		});
		this.config.onSectionCreated(this.content[pageId].children[sectionId], sectionConfig);

		pageNode.appendChild(sectionNode);
	},

	createPage 		: function (pageConfig, pageId) {
		var pageNode = this.createFromTemplate(this.config.pageTplId);

		this.content[pageId] = {
			node : pageNode,
			children : [],
			config : pageConfig
		};

		for (var i = 0; i < pageConfig.length; i++) {
			this.createSection(pageConfig[i], pageId);
		}

		if(this.position.page == null) {
			this.position.page = pageId;
			this.position.section = 0;
		}

		this.config.onPageCreated(pageNode, pageConfig, pageId);
		if(this.position.page == pageId) {
			pageNode.classList.remove("hidden")
		}

		document.body.appendChild(pageNode);
	},

	createFromTemplate 	: function (templateId) {

		console.log(templateId);
		var tplNode = document.querySelector(templateId);
		var result = tplNode.children[0].cloneNode(true);


		return result;
	},

	moveLeft : function() {
		var currentPage = this.content[this.position.page];
		var targetPage = this.content[this.position.page - 1];

		if (this.config.onPageSwitch(currentPage, targetPage, false)) {
			this.position.page--;
		};
	},
	moveRight : function() {
		var currentPage = this.content[this.position.page];
		var targetPage = this.content[this.position.page + 1]; 

		if (this.config.onPageSwitch(currentPage, targetPage, true)) {
			this.position.page++;
		};

	},
	moveTop : function() {
		var currentPage = this.content[this.position.page];
		var currentSection = currentPage.children[this.position.section];
		var targetSection = currentPage.children[this.position.section - 1];

		if (this.config.onSectionSwitch(currentSection, targetSection, false)) {
			this.position.section--;
		};
	},
	moveDown : function() {
		var currentPage = this.content[this.position.page];
		var currentSection = currentPage.children[this.position.section];
		var targetSection = currentPage.children[this.position.section + 1];

		if (this.config.onSectionSwitch(currentSection, targetSection, true)) {
			this.position.section++;
		};
	},
}

window.Explorer = Explorer;