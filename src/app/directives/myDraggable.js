angular.module("test", []).directive("myDraggable", myDraggable);

myDraggable.$inject = ["$document"];

//injecting jqlite service $document for DOM manipulation
function myDraggable($document) {
    return link;

    function link(scope, element, attr) {
        var startX = 0,
            startY = 0,
            x = 0,
            y = 0;


        element.css({
            position: 'relative',
            border: '5px solid black',
            backgroundColor: 'red',
            cursor: 'pointer'
        });

        element.on('mousedown', function(event) {
            event.preventDefault();
            startX = event.pageX - x;
            startY = event.pageY - y;
            $document.on('mousemove', mousemove);
            $document.on('mouseup', mouseup);
        });

        function mousemove(event) {
            x = event.pageX - startX;
            y = event.pageY - startY;
            element.css({
                top: y + 'px',
                left: x + 'px'
            });
        }

        function mouseup(event) {
            $document.off('mousemove', mousemove);
            $document.off('mouseup', mouseup);
        }
    }


}
