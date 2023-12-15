var menu = false
        function showHideMenu() {
         if (menu == false){
         console.log(" ini false");
         var element = document.getElementById("menu");
         element.classList.add("show")
         menu = true;
        } else {
         console.log(" ini true");
         var element = document.getElementById("menu");
         element.classList.remove("show")
         menu = false;
        }
        }
