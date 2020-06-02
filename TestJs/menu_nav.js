// get menu list

var menu = document.querySelectorAll('#dropdown > li');

for (var i = 0; i < menu.length; i++){
    menu[i].addEventListener("click", function()
    {
        // hidden sub menu
        var menuList = document.querySelectorAll('#dropdown > li > ul');
        for ( var j = 0 ; j < menuList.length; j++){
            menuList[j].style.display = "none";
        }
        // show menu
        this.children[1].style.display = "block";
    });
}