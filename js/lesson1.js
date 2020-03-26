// JavaScript Document
const list_items = document.querySelectorAll('.list-item');
const lists = document.querySelectorAll('.list');

let draggedItem = null;

for(let i = 0;i<list_items.length; i++){
	const item = list_items[i];
	
	item.addEventListener('dragstart',function(){
		draggedItem = item;
		setTimeout(function() {
			item.style.display ='none';
		},0)
	});
	
	item.addEventListener('dragend', function(){
		
		setTimeout(function() {
			draggedItem.style.display = 'block';
			draggedItem=null;
		},0);
	})
	
	item.addEventListener('mousedown',function(e){
		this.style.cursor='grabbing';
	});
	item.addEventListener('mouseup',function(e){
		this.style.cursor='grab';
	});
	

	for (const list of lists) {
  list.addEventListener('dragover', dragOver);
  list.addEventListener('dragenter', dragEnter);
  list.addEventListener('dragleave', dragLeave);
  list.addEventListener('drop', dragDrop);
}
	// Drag Functions
	function dragOver(e) {
		e.preventDefault();
	}
	
	function dragEnter(e) {
		e.preventDefault();
		this.style.backgroundColor='rgba(0,0,0,0.2)';
	}
	
	function dragLeave() {
		this.style.backgroundColor='rgba(0,0,0,0.1)';
	}
	
	function dragDrop() {
		this.append(draggedItem);
		this.style.backgroundColor='rgba(0,0,0,0.1)';		
		
	}	
}


function submit(){ //check for correct answers!!
	//check if the person is lazy
	// div has no other tags inside it
	if ( $('#box1').is(':empty') && $('#box2').is(':empty') && $('#box3').is(':empty') && 
		$('#box4').is(':empty') && $('#box5').is(':empty') && $('#box6').is(':empty')  ) {
	alert('***ERROR ERROR ERROR\n*******Code: LAZINESS\n\nYou need to at least TRY the problem..... come on ');
	}
	//check for more than one element per box
	else if ($('#box1').children().length>1 || $('#box2').children().length>1 || $('#box3').children().length>1 || $('#box4').children().length>1 || $('#box5').children().length>1 || $('#box6').children().length>1) {
	window.location.reload();
	alert('***ERROR ERROR ERROR\n*******Code: ONE AT A TIME PLEASE\n\nYou can only put one element in each box! ');
	}
	//check if any box is empty
	else if ($('#box1').children().length<1 || $('#box2').children().length<1 || $('#box3').children().length<1 || $('#box4').children().length<1 || $('#box5').children().length<1 || $('#box6').children().length<1) {
	window.location.reload();
	alert('***ERROR ERROR ERROR\n*******Code: ALMOST THERE\n\nYou have to fill in the empty boxes! ');
	}
	//check for correct answers! finally...
	else if( $("#box1").has("#openHtml").length && $("#box2").has("#openHead").length && $("#box3").has("#closeHead").length &&
	  $("#box4").has("#openBody").length && $("#box5").has("#closeBody").length && $("#box6").has("#closeHtml").length ){
	   alert( "YEE YEE! GOOD JOB! \u263a" );
	   }
	else{
		alert('***ERROR ERROR ERROR\n*******Code: ALMOST THERE BUD\n\nTry that again... \u2639');
		window.location.reload();
	}
    
	
}//end submit function


	
