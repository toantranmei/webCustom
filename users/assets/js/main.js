/**
 * Loop the stick for dropdown javascript
 */
var dropdown = document.getElementsByClassName('menu-dropdown');
var i;

for(i = 0; i < dropdown.length; i++) {
	dropdown[i].addEventListener('click', function() {
		this.classList.toggle("active");
		var dropdownContent = this.nextElementSibling;
		if (dropdownContent.style.display === 'block') {
			dropdownContent.style.display = 'none';
		} else {
			dropdownContent.style.display = 'block';
		}
	});
}


/**
 * Dropdown COnfig Task
 * 
 */

function openConfigTask() {
	console.log("sao v ku");
	document.getElementById('panel-config-task').classList.toggle("open");
	console.log('dien ak');
}

window.onclick = function(event) {
	if (!event.target.matches('.config-task')) {
		var dropdown = document.getElementsByClassName('dropdown-config-task');
		var i;

		for (i = 0; i < dropdown.length; i++) {
			var openTask = dropdown[i];
			if (openTask.classList.contains('open')) {
				openTask.classList.remove('open');
			}
		}
	}
}


/**
 * Float label
 */

var floatLabel = document.getElementsByClassName('floating');
var i;

for(i = 0; i < floatLabel.length; i++) {
	floatLabel[i].addEventListener('click', function() {
		if (this.parentElement.classList.contains('focused')) {
			this.parentElement.classList.remove('focused');
		}
		this.parentElement.classList.add('focused');

		
	})
}


/**
 * Open Modal
 */

var modalOpen = document.getElementsByClassName('btnOpenModal');
var i;

for(i = 0; i < modalOpen.length; i++) {
	modalOpen[i].addEventListener('click', function() {
		var elementOpen = document.getElementById('create_project');
		elementOpen.classList.add('in');
		elementOpen.classList.add('open');
	})
}

var close = document.getElementsByClassName('close');
var i;

for(i = 0; i < close.length; i++) {
	close[i].addEventListener('click', function() {
		var elementClose = document.getElementById('create_project');
		elementClose.classList.remove('in');
		elementClose.classList.remove('open');
	})
}