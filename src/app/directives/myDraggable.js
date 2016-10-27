angular.module("test",[]).directive("myDraggable",myDraggable);

myDraggable.$inject = ["$document"];

//injecting jqlite service $document for DOM manipulation
function myDraggable($document){
	return link;

	function link(scope, element, attr){
		var startX = 0, startY = 0, x = 0, y = 0;
	}	

	element.css({
		position: 'relative',
		border: '1px solid yellow',
		backgroundColor: 'purple',
		cursor: 'pointer'
	});

	element.on('mousedown', function(event){
		event.preventDefault();
		start
	});

}
