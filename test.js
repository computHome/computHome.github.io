var arr = document.querySelectorAll('a')
window._t = arr
console.log("aree:   [", arr, "]");
for (var i = 0, len = arr.length; i < len; i++) {
    var str = arr[i];
    console.log("str:   [", str, "]");

    var but = document.createElement("span")
    but.textContent = "  - " + str.href
    str.insertAdjacentElement('afterend', but);
}

