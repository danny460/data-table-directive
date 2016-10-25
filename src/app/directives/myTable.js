(function(){
	"use strict";

	angular
		.module('app')
		.directive('myTable',myTable);

	function hashTable(){
		//TODO
		var self = this;
		this.length = 0;
		this.items = {};
		//
		this.set = function(key,value){};
		this.get = function(key){};
		this.has = function(key){};
		this.delete = function(key){};
		this.clear = function(){
			this.length = 0;
			this.items = {};
		};
		this.getLength = function(){
			return this.length;
		}


	}
	
	function tableController(){
		var self = this;
		var selected = new hashTable();

	}

	function compile(){

	}

	function link(){

	}

	function myTable(){
		//TODO
	}
})();