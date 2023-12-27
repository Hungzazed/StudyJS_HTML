function ClickFn() {
    setTimeout(function() {
        window.open("https://www.youtube.com/", "youtube", left=100,top=100,width=320,height=320);
    }, 0);
}


function Reload() {
    setInterval(function() {
        location.reload();
    }, 3000)
}

function CheckHTTPS() {
    const SLPage = window.location.protocol;
    if (SLPage.endsWith("s:"))
        alert("Web Secure");
    else alert("Web not Secure");
}

function OpenPrint() {
    window.print();
}
let count = 10
function countDown() {
    if (count > 0) {
        console.log(count--);
        setTimeout(countDown, 1000);
    } else {
        console.log("Happy New Year");
    }
}

function GetHWPage() {
    alert("Height: " + window.innerHeight + "\nWidth: " + window.innerWidth);
}

function GetLocation() {
    alert("X: " + window.screenX + "\Y: " + window.screenY);
}

function GetName() {
    alert(window.navigator.userAgent);
}

function GetLang() {
    alert(window.navigator.language);
}


function GetPlat() {
    alert(window.navigator.platform);
}