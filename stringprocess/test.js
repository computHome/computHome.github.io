

let startM = '"'
let endM = '",'

var pButsave = document.querySelector('#tbbb');

pButsave.onclick = () => {

  // alert('test');
  var fffd = document.querySelector('#tarea');
  let txt = fffd.value
  // alert(txt);

  let arr = txt.split("\n")
  let arrF = []
  arr.forEach((val, index, array) => {
    console.log('curLine:   [', val, ']');

    arrF.push(startM + val.trim() + endM)


  })

  let out = arrF.join("\n")
  var fdfd = document.querySelector('#tarea2');
  fdfd.value = out

} 
