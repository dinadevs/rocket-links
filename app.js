let checkboxThemeMode = document.getElementById("theme-mode-switch");
let checkboxThemeColor = document.getElementById("theme-color-switch");


checkboxThemeMode.onclick = function changeThemeMode()
{
    let themeMode = document.getElementById("body").className.split('-')[0];
    let themeColor = document.getElementById("body").className.split('-')[1];

    if(themeMode.includes("dark"))
    {
        themeMode = "light"
    }
    else{
        themeMode = "dark"
    }

    document.getElementById("body").className = themeMode + "-" + themeColor;
}

checkboxThemeColor.onclick = function changeThemeColor()
{
    let themeMode = document.getElementById("body").className.split('-')[0];
    let themeColor = document.getElementById("body").className.split('-')[1];

    if(themeColor.includes("blue"))
    {
        themeColor = "pink"
    }
    else{
        themeColor = "blue"
    }

    document.getElementById("body").className = themeMode + "-" + themeColor;
}