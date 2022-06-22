var tinyMceUtil = new TinyMceUtil('mceeditor')
tinyMceUtil.ready = () => {
    tinyMceUtil.setValue('<u>ini</u>t ready!');
    tinyMceUtil.editor.on("contextmenu", function (ed, e) {
        try {
            console.debug('contextmenu event: ', e);

        }
        catch (e) {
            console.error(e);
        }
    });

    tinyMceUtil.editor.on("mouseup", function (ed, e) {

        let sss = tinyMceUtil.getSelectedText();
        console.debug('mouseup event: ', sss);
        let ddd = document.querySelector('#aaa')
        ddd.value = sss

        var pButsave = document.querySelector('#vscodeHiliteId');

        pButsave.click()

    });
};



function addCSS(css) {
    var sheet = document.createElement('style');

    sheet.textContent = css;
    document.getElementsByTagName('head')[0].appendChild(sheet).sheet;
}


/*
window._timer1 = window.setTimeout(function () {
    console.debug('setTimeout ' );
   addCSS(" td {    border: 1px solid red ; } ");
   console.debug('addCSS ' );
},2000);


*/
