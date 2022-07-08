

// init();
/**
 * @namespace Provoke
 * promise management for async calls
 */
window._currentFileName = "";

/*
var Provoke = (function (ns) {
    
    ns.run = function (namespace, method) {
        // the args to the server function
        var runArgs = Array.prototype.slice.call(arguments).slice(2);
        console.log(runArgs);
        if (arguments.length < 2) {
            throw new Error('need at least a namespace and method');
        }
        // this will return a promise
        return new Promise(function (resolve, reject) {
            google.script.run
                .withFailureHandler(function (err) {
                    reject(err);
                })
                .withSuccessHandler(function (result) {
                    resolve(result);
                })[method].apply(this, runArgs);
        });
    };
    return ns;
})(Provoke || {});
*/

var enableAutoSave = false;
var isRenderSpace = false;
var isHandleMouseWheel = true;
var noSyntaxCheck = true;
var messArr = {};
window._monaco = {};
messArr.arr = [];
messArr.max = 3;
var isEnterChar = false;
var EditOption = {
    mouseWheelZoom: false,
    language: 'javascript',
    scrollbar: {
        // Subtle shadows to the left & top. Defaults to true.
        useShadows: false,
        // Render vertical scrollbar.
        // Accepted values: 'auto', 'visible', 'hidden'.
        // Defaults to 'auto'
        vertical: 'visible',
        handleMouseWheel: isHandleMouseWheel,
        // Render horizontal scrollbar.
        // Accepted values: 'auto', 'visible', 'hidden'.
        // Defaults to 'auto'
        //	horizontal: 'visible',
        verticalScrollbarSize: 17,
        horizontalScrollbarSize: 17,
        //		arrowSize: 30
    },
    minimap: {
        enabled: ! false,
        showSlider: 'always',
        maxColumn: 50
    },
    renderWhitespace: "all",
    selectionHighlight: false,
    occurrencesHighlight: false,
    overviewRulerLanes: 3,
    smoothScrolling: true,
    wordWrap: 'on',
    //	wordWrapColumn: 40,
    showFoldingControls: 'always',
    // Set this to false to not auto word wrap minified files
    wordWrapMinified: true,
    // try "same", "indent" or "none"
    //	wrappingIndent: "indent",
    fontSize: "13",
    acceptSuggestionOnEnter: isEnterChar,
    // suggestOnTriggerCharacters : false,
    //    snippetSuggestions : 'none',
    //	        wordBasedSuggestions : false,
    //     suggestOnTriggerCharacters : false, 
    //	         acceptSuggestionOnCommitCharacter : false,
    mouseWheelScrollSensitivity: 2,
   
};

function hideCoxMenu() {
    var log = $("#debuglog"); // Find the element to display msg in.
    log.hide();
}

function changeObj(obj, name, value) {
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (name == key) {
                obj[key] = value;
            }
        }
    }
}

function pushLimitArr5(input, array, arrMax) {
    // nppLog2('','msg ff fff [input]' +input);
    // nppLog2('','msg ff fff [array]' +array);
    // nppLog2('','msg ff fff [arrMax]' +arrMax);
    try {
        var index = array.indexOf(input);
        if (index >= 0) {
            array.splice(index, 1);
        }
        array.push(input);
        if (array.length > arrMax) {
            array.shift();
        }
    } catch (e) {
        alert(' debug187 ' + 'pushLimitArr5  error ');
        //	nppLog2('','msg ff fff [error]' + e.message);
    }
}
window._custom = function (sel) {
    var newstr =
        "Pls define your own method with signature like this:\nwindow._custom = function (sel) {\n return 'new string';\n}\n";
    return newstr;
};
require.config({
    paths: {
        'vs': 'https://unpkg.com/monaco-editor/min/vs'
    }
});
window.MonacoEnvironment = {
    getWorkerUrl: () => proxy
};
let proxy = URL.createObjectURL(new Blob([`
     self.MonacoEnvironment = {
         baseUrl: 'https://unpkg.com/monaco-editor/min/'
     };
     importScripts('https://unpkg.com/monaco-editor/min/vs/base/worker/workerMain.js');
 `], {
    type: 'text/javascript'
}));
require(["vs/editor/editor.main"], function () {
    monaco.editor.defineTheme('myTheme', {
        base: 'vs',
        inherit: true,
        rules: [{
            background: 'EDF9FA'
        }],
        colors: {
            'editor.foreground': '#000000',
            'editor.background': '#FFFFFF',
            'editorCursor.foreground': '#8B0000',
            'editor.lineHighlightBackground': '#0000FF20',
            'editorLineNumber.foreground': '#008800',
            'editor.selectionBackground': '#88000030',
            'editor.inactiveSelectionBackground': '#88000015',
            'editor.selectionHighlightBackground': '#22EE0099',
        }
    });
    monaco.editor.setTheme('myTheme');
    var editor = monaco.editor.create(document.getElementById('container'), EditOption);
    window.editor = editor;
    editor.getAction('editor.action.formatDocument').run().then(function () {
        console.log('finished');
        window._init();
    });
    window.monaco = monaco;
    window.onresize = function () {
        editor.layout();
    };
});
window._isDirty = false;
//var _saveDelay = 5000;
var _saveDelay = 60000;
window._blockLoad = function () {
    console.log("sss override onbeforeunload:");
    console.log("onbeforeunload:");
    console.log("_isDirty: " + window._isDirty);
    return false;
};
// init();
window._console = consolelogOld = console.log;

function replaceLog() {
    window._outlog = "";
    console.log = function () {
        var arr = arguments;
        for (var i = 0; i < arr.length; i++) {
            var str = arr[i];
            if (i == 0)
                window._outlog = window._outlog + "\n" + str;
            else
                window._outlog = window._outlog + "|" + str;
            //  console.log('see:', str);
        }
        consolelogOld.apply(this, Array.prototype.slice.call(arguments));
    };
}

function runEval(arg) {
    eval(arg);
}
window.onblur = function () {
    console.log(" onblur:  [", "", "]");
    toastr.info('onblur!');
    trySave(100);
};
window.onfocus = async function () {

    try {
        console.log(" onfocus:  [", "", "]");
        toastr.info('onfocus!');
        if (window._currentFileName != "") {


        }

    } catch (e) {
        console.error(e);
    }

};

function trySave(delay) {
    try {
        if (window._currentFileName != "") {
            console.log("window._timer1:   [", window._timer1, "]");
            console.log("enableAutoSave:   [", enableAutoSave, "]");
            if (enableAutoSave) {
                if (typeof window._timer1 != 'undefined') {
                    window.clearTimeout(window._timer1);
                }
                window._timer1 = window.setTimeout(function () {
                    if (window._isDirty) {

                    }
                }, delay);
            }
        }
    } catch (e) {
        console.error(e);
    }
}


function dateFormat(d) {
    var datestring = ("0" + d.getDate()).slice(-2) + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" +
        d.getFullYear() + " " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2) + "." + (
            "0" + d.getSeconds()).slice(-2);
    return datestring;
}

function dateFormat2(d) {
    var datestring = ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2) + "." + ("0" + d
        .getSeconds()).slice(-2);
    return datestring;
}

function runJs() {
    //	 insertText( "fasdfsa sdfdsjkfj\nfsdfd\n\n");
    window.tmp = editor.getSelection();
    var sel = window.editor.getModel().getValueInRange(window.editor.getSelection())
    console.log('see:', sel);
    replaceLog();
    try {
        runEval(sel);
    } catch (e) {
        window._outlog = "error:\n" + e.stack + "\n";
    }
    console.log = consolelogOld;
    // var range = new monaco.Range(selection.startLineNumber, selection.startColumn, selection.endLineNumber, selection.endColumn); 
    var aaa = dateFormat(new Date());
    var sss = {
        startLineNumber: tmp.endLineNumber,
        endLineNumber: tmp.endLineNumber,
        startColumn: tmp.endColumn,
        endColumn: tmp.endColumn
    };
    insertText("\n------\nResult (" + aaa + ") :" + window._outlog + " \n------\n", sss);
    window._startHook = false;
    editor.setSelection(sss);
    editor.focus();
}
window._monaco.runJs = runJs;

function setTxtValue(aaa) {
    var tmp = editor.getSelection();
    var sel = window.editor.getModel().getValueInRange(window.editor.getSelection())
    var sss = {
        startLineNumber: tmp.endLineNumber,
        endLineNumber: tmp.endLineNumber,
        startColumn: tmp.endColumn,
        endColumn: tmp.endColumn
    };
    insertText(aaa, tmp);
    editor.focus();
}

function Custom() {
    try {
        console.log('runJs:');
        //	 insertText( "fasdfsa sdfdsjkfj\nfsdfd\n\n");
        window.tmp = editor.getSelection();
        var sel = window.editor.getModel().getValueInRange(window.editor.getSelection())
        console.log('see:', sel);
        /* if (sel == "")
        {
            alert("Pls select text!");
            return;
        } */
        var newstr = window._custom(sel);
        // var range = new monaco.Range(selection.startLineNumber, selection.startColumn, selection.endLineNumber, selection.endColumn); 
        //      var aaa = new Date().format("HH:MM:ss");
        var aaa = dateFormat(new Date());
        setTxtValue(newstr);
    } catch (e) {
        console.log(e);
    }
}

function insertText(text, selection) {
    var range = new monaco.Range(selection.startLineNumber, selection.startColumn, selection.endLineNumber,
        selection.endColumn);
    var id = {
        major: 1,
        minor: 1
    };
    var op = {
        identifier: id,
        range: range,
        text: text,
        forceMoveMarkers: true
    };
    editor.executeEdits("my-source", [op]);
}

function prev() {
    _pos--;
    // console.log("_pos: " + _pos);
    if (_pos < 0) {
        _pos = _max - 1;
        showText();
    } else {
        showText();
    }
    scrollTo();
}

function getProp(arg) {
    var propertyNames = Object.keys(_dict).filter(function (propertyName) {
        return propertyName.indexOf(arg) === 0;
    });
    console.log("propertyNames ", propertyNames);
    return propertyNames;
}

function escapeRegExp(str) {
    return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}

function jumpToDecor() {
    var selection = editor.getSelection();
    var lineNo = selection.startLineNumber;
    for (var i = 0, len = _myDecorations.length; i < len; i++) {
        var decor = _myDecorations[i];
        console.log('decor.range.startLineNumber:', decor.range.startLineNumber);
        if (decor.range.startLineNumber > lineNo) {
            var sss = {
                startLineNumber: decor.range.startLineNumber,
                endLineNumber: decor.range.startLineNumber,
                startColumn: 1,
                endColumn: 1
            };
            editor.setSelection(sss);
            editor.revealLineInCenter(decor.range.startLineNumber);
            break;
        }
    }
}

function jumpToDecorUp() {
    var selection = editor.getSelection();
    var lineNo = selection.startLineNumber;
    for (var i = _myDecorations.length; i--;) {
        var decor = _myDecorations[i];
        console.log('decor.range.startLineNumber:', decor.range.startLineNumber);
        if (decor.range.startLineNumber < lineNo) {
            var sss = {
                startLineNumber: decor.range.startLineNumber,
                endLineNumber: decor.range.startLineNumber,
                startColumn: 1,
                endColumn: 1
            };
            editor.setSelection(sss);
            editor.revealLineInCenter(decor.range.startLineNumber);
            break;
        }
    }
}

function hilite(txt) {
    if (txt.length < 2) {
        clearDecor(window._decid);
        return;
    }
    var str = txt.indexOf("\n");
    //   console.log('see:', str);
    if (str >= 0) {
        clearDecor(window._decid);
        return;
    }
    var myDecorations = [];
    var regEx = new RegExp(escapeRegExp(txt), 'ig');
    var doc = window.editor.getModel();
    if (txt.length > 1) {
        if (txt.match(/^\s+$/))
            return;
        var str = doc.getLinesContent();
        var len = doc.getLineCount();
        for (var i = 0; i < len; i++) {
            var lineText = str[i];
            var line = lineText;
            //      console.log("line: " + line);
            // if (i === activeTextEditor.selection.active.line) {
            //     continue;
            // }
            var match;
            while ((match = regEx.exec(line)) !== null) {
                // var msg = 'Found ' + match[0] + '. ';
                // msg += 'Next match starts at ' + regEx.lastIndex + " and end at " + (regEx.lastIndex + match[0].length);
                // console.log(msg);
                var range = {
                    startLineNumber: i + 1,
                    startColumn: match.index + 1,
                    endLineNumber: i + 1,
                    endColumn: match.index + 1 + match[0].length
                }
                var decoration = {
                    range: range,
                    options: {
                        overviewRuler: {
                            color: "red",
                            position: 1
                        },
                        inlineClassName: "ssss"
                    }
                };
                myDecorations.push(decoration);
            }
        }
        window._decid = window.editor.deltaDecorations(window._decid, myDecorations);
    }
}
window.hilite = hilite;
function hilite3(regEx, decorArr) {
    var myDecorations = [];
    var limit = 9999;
    var doc = window.editor.getModel();
    var str = doc.getLinesContent();
    var len = doc.getLineCount();
    for (var i = 0; i < len; i++) {
        var lineText = str[i];
        var line = lineText;
        //	 console.log(">> xxx hi 3 pattern");
        limit--;
        //	 console.log(limit);
        var match;
        while ((match = regEx.exec(line)) !== null) {
            limit--;
            var range = {
                startLineNumber: i + 1,
                startColumn: match.index + 1,
                endLineNumber: i + 1,
                endColumn: match.index + 1 + match[0].length
            }
            var decoration = {
                range: range,
                options: {
                    overviewRuler: {
                        color: "blue",
                        position: 4
                    },
                    className: "ssss3"
                }
            };
            myDecorations.push(decoration);
            window._myDecorations = myDecorations;
            if (limit < 0)
                break;
        }
        if (limit < 0)
            break;
    }
    // console.log("exit: " +limit);
    return window.editor.deltaDecorations(decorArr, myDecorations);
}
window._hilite3 = hilite3;

function clearDecor(decorArr) {
    decorArr = editor.deltaDecorations(decorArr, [{
        range: new monaco.Range(1, 1, 1, 1),
        options: {}
    }]);
    return;
}
window._clearDecor = clearDecor;

function getDictWord(arg) {
    var retWord;
    var ret;
    var word = arg.toLowerCase();
    while (true) {
        ret = _dict['"' + word + '"'];
        if (ret != null) {
            //     console.log("word   word ", word);
            retWord = word;
            break;
        } else {
            var nnn = getProp('"' + word);
            console.log("nnn ", nnn);
            if (nnn.length > 0) {
                ret = _dict[nnn[0]];
                //     console.log("word   word ", nnn[0]);
                retWord = nnn[0];
                break;
            }
            word = word.substr(0, word.length - 1);
        }
    }
    if (ret.length == 60)
        ret = ret + "...";
    ret = retWord + " -> " + ret;
    console.log("word   -- ", ret);
    return ret;
}

function next() {
    _pos++;
    // console.log("_pos: " + _pos);
    if (_pos >= _max) {
        _pos = 0;
        showText();
    } else {
        showText();
    }
    scrollTo();
}

function getMultiWord(arg) {
    var str = arg;
    var res = str.split(" ");
    console.log("res [" + res + "]");
    var max = res.length;
    var lastword = res[max - 1];
    console.log("lastword [" + lastword + "]");
    return {
        last: lastword,
        arr: res
    };
}

function findWord(arg) {
    console.log(new Date().getTime() + " find: " + arg);
    if (arg == "")
        return;
    var model = window.editor.getModel();
    var range = model.findMatches(arg)[0].range;
    console.log(range);
    editor.setSelection(range);
    editor.getAction('actions.find').run();
    document.getElementById('searchId').focus();
    editor.revealLineInCenter(range.startLineNumber);
    console.log(range.startLineNumber);
}

function scrollTo() {
    var arg = window._hilite;
    if (typeof arg == 'undefined')
        return;
    if (arg == "")
        return;
    if (arg.length < 2)
        return;
    console.log(new Date().getTime() + " scrollTo: " + arg);
    var model = window.editor.getModel();
    var range = model.findMatches(arg)[0].range;
    console.log(range);
    editor.setSelection(range);
    editor.revealLineInCenter(range.startLineNumber);
    console.log(range.startLineNumber);
}

function matchArr(str, arr) {
    var res = true;
    for (var i = arr.length; i--;) {
        var obj = arr[i];
        if (str.toLowerCase().indexOf(obj.toLowerCase()) < 0) {
            return false;
        }
    }
    return res;
}

function filterOut(arr, input) {
    var retArr = [];
    for (var i = arr.length; i--;) {
        var obj = arr[i];
        if (matchArr(obj.key, input)) {
            retArr.push(obj);
        }
    }
    return retArr;
}

function showText2() {
 
}

function showText() {
 
}
window._init2 = function (arr) {
    try {
        console.log("aaa test");
       //     var isTest = false;
  
        window.editor.onDidChangeModelContent((event) => {
            // render();

            //            toastr.info('onDidChangeModelContent!');
            console.log("sss fsdf --", event);
            window._isDirty = true;
            window.onbeforeunload = window._blockLoad;
            
            var regEx = / {{ .*? }} /g;
            window._decid2 = hilite3(regEx, window._decid2);
        });
        window.editor.onDidChangeCursorPosition((event) => {
            //       console.log("getPosition   --" + window.editor.getPosition());
            var selection = editor.getSelection();
            var ttt = JSON.stringify(selection);
            var sel = window.editor.getModel().getValueInRange(window.editor.getSelection())
            console.log("ttt: " + ttt);
            console.log("ttt: " + selection.startLineNumber);
            document.getElementById('caretId').value = "Ln: " + selection.startLineNumber + " Col: " +
                selection.endColumn + " Sel: " + sel.length;
            var txt = window.editor.getModel().getValueInRange(window.editor.getSelection())
            console.log("txt   -- " + txt);
            var word = window.editor.getModel().getWordAtPosition(window.editor.getPosition());
            //     console.log("getWordAtPosition   --" + word);
            if (word != null) {
                //     console.log("word   -- ", word.word);
                window._wordOver = word.word;
                searchDict(word.word);
            }
            if (txt != "") {

                hilite(txt);
                window._editor2.execute('find',txt);
            }

            else {
                if (window._wordOver != "") {
                    //	hilite(window._wordOver);
                }
            }
            //      console.log('selection see:', ttt);
        });
 
 
        editor.addAction({
            // An unique identifier of the contributed action.
            id: 'my-unique-idgg',
            // A label of the action that will be presented to the user.
            label: 'Google this --->',
            // An optional array of keybindings for the action.
            keybindings: [
                monaco.KeyMod.CtrlCmd | monaco.KeyCode.F10,
                // chord
                monaco.KeyMod.chord(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_K, monaco.KeyMod
                    .CtrlCmd | monaco.KeyCode.KEY_M)
            ],
            // A precondition for this action.
            precondition: null,
            // A rule to evaluate on top of the precondition in order to
            // dispatch the keybindings.
            keybindingContext: null,
            contextMenuGroupId: 'navigation',
            contextMenuOrder: 6,
            // Method that will be executed when the action is triggered.
            // @param editor The editor instance is passed in as a convinience
            run: function (ed) {
                var txt = window.editor.getModel().getValueInRange(window.editor.getSelection());
                //	txt = txt.replace(" ", "+");
                var url = "https://www.google.com.hk/search?q=" + txt;
                window.open(url, '_blank');
                //    opn(url);
                //      alert("i'm running => " + txt);
                return null;
            }
        });
 
        editor.getActions().map((event) => {
            // render();
            //    console.log("getActions -- ", event);
        });
        editor.getSupportedActions().map((event) => {
            // render();
            //  console.log("getSupportedActions -- ", event);
        });
        console.log("getActions size -- ", editor.getActions().length);
        console.log("getSupportedActions size -- ", editor.getSupportedActions().length);

        function createDependencyProposals() {
            // returning a static list of proposals, not even looking at the
            // prefix (filtering is done by the Monaco editor),
            // here you could do a server side lookup
            return [{
                label: '"lodash"',
                kind: monaco.languages.CompletionItemKind.Function,
                documentation: "The Lodash library exported as Node.js modules.",
                insertText: '"lodash": "*"'
            },
            {
                label: 'express',
                kind: monaco.languages.CompletionItemKind.Function,
                documentation: 'Fast, unopinionated, minimalist web framework: \n"exprdddddess": "*"',
                insertText: '"exprdddddess": "*"'
            },
            {
                label: '"mkdirp"',
                kind: monaco.languages.CompletionItemKind.Function,
                documentation: "Recursively mkdir, like <code>mkdir -p</code>",
                insertText: '"mkdirp": "*"'
            }
            ];
        }
        monaco.languages.registerCompletionItemProvider('javascript', {
            provideCompletionItems: function (model, position) {
                // find out if we are completing a property in the
                // 'dependencies' object.
                var textUntilPosition = model.getValueInRange({
                    startLineNumber: 1,
                    startColumn: 1,
                    endLineNumber: position.lineNumber,
                    endColumn: position.column
                });
                var match = textUntilPosition.match(
                    /"dependencies"\s*:\s*{\s*("[^"]*"\s*:\s*"[^"]*"\s*,\s*)*("[^"]*)?$/);
                var suggestions = createDependencyProposals();
                return {
                    suggestions: suggestions
                };
            }
        });
        window._decid = [];
        window._decid2 = [];
        document.oncontextmenu = function (e) {
            var log = $("#debuglog"); // Find the element to display msg in.
            var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
            var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
            var tmp = h - e.clientY;
            console.log("tmp: ", tmp);
            console.log("h: ", h);
            console.log("ele height: ", log.height());
            var top;
            if (tmp > log.height()) {
                top = e.clientY;
            } else {
                top = h - log.height() - 10;
            }
            if (log.is(":visible")) {
                log.hide();
            } else {
                //             showMsg("menu");
                log.css('top', top); //or wherever you want it
                log.css('left', e.clientX); //or wherever you want it
                log.show();
                console.log("set focus: ");
                log[0].focus();
            }
            return false;
        }
        editor.updateOptions({
            contextmenu: false
        })
        window.editor.onContextMenu((event) => {
            //  editor.deltaDecorations([], []);
            return false;
        });
    
        window.editor.onDidFocusEditorText((event) => {
            if (window._ref)
                window._ref.hide();
            var log = document.getElementById('debuglog');
            console.log('debuglog:', log);
            if (log)
                hideCoxMenu();
        });
        window.editor.onDidChangeCursorPosition((event) => {
            //  editor.deltaDecorations([], []);
            var txt = window.editor.getModel().getValueInRange(window.editor.getSelection())
            console.log("sel: " + txt);
            if (txt != "")
                hilite(txt);
            else {
                if (window._wordOver != "") {
                    //            hilite(window._wordOver);
                }
            }
        });
 
   

        window._monaco.EditOption = EditOption;
        window._monaco.changeObj = changeObj;
     
        window._monaco.monaco = monaco;
        window._monaco.editor = editor;
        window._monaco.noSyntaxCheck = noSyntaxCheck;
  //      history.pushState("object or string representing the state of the page", "HTML", "/HTML");
        document.title = "Editor";
        document.getElementById('container').onmouseup = function () {
            //   console.log('changeCursor:', window.editor.selection.getRange());
            //	var jj =   window.editor.getSession().doc.getTextRange(window.editor.selection.getRange());
            var word = window.editor.getModel().getWordAtPosition(window.editor.getPosition());
            console.log("word   -- ", word);
            if (word != null && word.word != "") {
                console.log("word   -- ", word.word);
                searchDict(word.word);
            }
        };
 
    } catch (e) {
        console.log(e.stack);
        alert(e);
    }
};

function searchDict(word) {

}
var preDict = "";
async function mdethodName(strUser) {

    /*
    
        try {
            $("#dialog-waiting").dialog("open");
            window._currentFileName = strUser;
            if (window._currentFileName != "") {
                // alert(strUser);
                let res = await Provoke.run(null, 'getResp1', window._currentFileName);
                toastr.info('current file: ' + window._currentFileName);
                window.editor.setValue(res);
                console.log(res);
                $("#dialog-waiting").dialog("close");
            }
        } catch (e) {
            console.error(e);
        }
    
    */

}
async function getListJson() {
    var dropbox = "Received Files";
    let arg = await Provoke.run(null, 'getFilesListByName', dropbox);
    console.log("aaaaaargarg:", arg);
    var arrUniq = [];
    var arr = JSON.parse(arg);
    // Logger.log(window._data1); 
    var select = document.querySelector("#selectId");
    select.options.add(new Option("", "", true));
    console.log("aaaaaobj :", arr);
    for (var i = 0, len = arr.length; i < len; i++) {
        var obj = arr[i];
        var a = arrUniq.indexOf(obj.file_name);
        if (a == -1 && obj.file_size < 500000 && obj.file_name != "" && !obj.file_name.toLowerCase()
            .endsWith(".zip")) {
            try {
                arrUniq.push(obj.file_name);
                if (typeof obj.file_id != 'undefined') {
                    var opt = new Option(obj.file_name, obj.file_id);
                    //   opt.setAttribute("cslass", "democlass");
                    select.options.add(opt);
                    //   select.options.add(new Option("Method2", "FI"));
                }
            } catch (e) {
                console.log("mark " + e);
            }
        }
    }
    select.onchange = function () {
        var e = document.getElementById("selectId");
        var strUser = e.options[e.selectedIndex].text;
        mdethodName(strUser);
    };
}
window._init = async function () {
    try {
        monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions({
            noSemanticValidation: true,
            noSyntaxValidation: true,
        });
        window._preWord = "";
        window.editor.setValue("aaaa  records\naaaa  records\naaaa  records\naaaa  records\naaaa  records\naaaa  records\naaaa  records\n\n\n\n\n\n\n\naaaa  records\naaaa  records\naaaa  records\naaaa  records\naaaa  records\naaaa  records\naaaa  records\n\n\n\n\n\n\n\naaaa  records\naaaa  records\naaaa  records\naaaa  records\naaaa gggggggg records\naaaa  records\naaaa  records\n\n\n\n\n\n\n\naaaa  records\naaaa  records\naaaa  records\naaaa  records\naaaa  records\naaaa  records\naaaa  records\n\n\n\n\n\n\n\naaaa  records\naaaa  records\naaaa  records\naaaa  records\naaaa  records\naaaa  records\naaaa  records\n\n\n\n\n\n\n\naaaa  records\naaaa  records\naaaa  records\naaaa  records\naaaa  records\naaaa  records\naaaa  records\n\n\n\n\n\n\n\naaaa  records\naaaa  records\naaaa  records\naaaa  records\naaaa  records\naaaa  records\naaaa  records\n\n\n\n\n\n\n\naaaa  records\naaaa  records\naaaa  records\naaaa  records\naaaa  records\naaaa  records\naaaa  records\n\n\n\n\n\n\n\naaaa  records\naaaa  records\naaaa  records\naaaa  records\naaaa  records\naaaa  records\naaaa  records\n\n\n\n\n\n\n\naaaa  records\naaaa  records\naaaa  records\naaaa  records\naaaa  records\naaaa  records\naaaa  records\n\n\n\n\n\n\n\naaaa  records\naaaa  records\naaaa  records\naaaa  records\naaaa  records\naaaa  records\naaaa  records\n\n\n\n\n\n\n\naaaa  records\naaaa  records\naaaa  records\naaaa  records\naaaa  records\naaaa  records\naaaa  records\n\n\n\n\n\n\n\naaaa  records\naaaa  records\naaaa  records\naaaa  records\naaaa  records\naaaa  records\naaaa  records\n\n\n\n\n\n\n\naaaa  records\naaaa  records\naaaa  records\naaaa  records\naaaa  records\naaaa  records\naaaa gggggggg records\n\n\n\n\n\n\n\n");
        window._init2([])
    } catch (e) {
        console.log(e.stack);
        alert(e);
    }
};
$(document).ready(function () {

    /*
        $("#dialog-waiting").dialog({
            autoOpen: false,
            width: 200,
            modal: true
        });
        $("#dialog-waiting").dialog("open");
    */





});

