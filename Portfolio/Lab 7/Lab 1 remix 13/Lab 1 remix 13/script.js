/*function showSubMenu() {
    var submenu = document.getElementById('submenu1');
    submenu.style.display = 'block';
    var parentLi = submenu.parentElement;
    parentLi.style.backgroundColor = 'yellow';
  }

  function hideSubMenu() {
    var submenu = document.getElementById('submenu1');
    submenu.style.display = 'none';
    var parentLi = submenu.parentElement;
    parentLi.style.backgroundColor = 'white';
  }*/


	function toggleMenu(arg){
		if(document.getElementById(arg).style.display=='block'){
			document.getElementById(arg).style.display='none';
		}
		else{
			document.getElementById(arg).style.display='block';
		}
				
			
	}
	