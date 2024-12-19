const button = document.getElementById("js--menu");
const navigation = document.getElementById("js--nav");
const body = document.getElementById("js--body");

button.onclick = function(){
    if (navigation.style.visibility === "visible") {
        // Hide the navigation menu
        navigation.style.visibility = "hidden";
        navigation.style.opacity = 0;
        body.style.overflow = "auto";
    } else {
        // Show the navigation menu
        navigation.style.visibility = "visible";
        navigation.style.opacity = 1;
        body.style.overflow = "hidden";
    }
}
