// menu
function openNav() {
        document.getElementById("mySidenav").style.width = "300px";
        document.querySelector("#web_name a").style.visibility="hidden";
        setTimeout(() => {
                document.querySelector("#logo").style.paddingLeft="290px";
        }, 150);
}
function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
        setTimeout(() => {
                document.querySelector("#logo").style.paddingLeft="0px";
                document.querySelector("#web_name a").style.visibility="visible";
        }, 150);
}