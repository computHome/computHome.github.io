/*
    <script src="tinymce\tinymce.min.js" referrerpolicy="origin"></script>
    <script src="http://127.0.0.1:8081/1src/bookmarklet/common/tinyMceUtil.js"></script>
         #editId1 {
            display: block;
            background-color: white;
            border-width: 1px;
            border-color: red;
            border-style: solid;
            position: fixed;
            bottom: 0px;
            right: 0px;
            width: 450px;
        }
*/
(function (global) {
    class TinyMceUtil {
        constructor(selectorId) {
            this.selectorId = selectorId;
            this.init()
        }
        init() {
            tinymce.init({
                selector: '#' + this.selectorId,

                content_style:
                    "body {padding: 2px;    margin: 1px; background: #EEEEEE; color: black; font-size: 16pt; font-family: Arial Black; }   p { margin: 1px;  }  td {    border: 1px solid red ; }  ",
                height: 955,
                setup: (editor) => {
                    editor.on('init', (e) => {
                        this.editor = editor;
                        this.ready();
                        //    editor.setContent('fasfsdf df');
                    });
                   

                    
                },
                
          
                menubar: true,
                statusbar: true,
                toolbar: true,
               
            });
        }
        // selection.getContent({format : 'text'});
        getSelectedText() {
            return this.editor.selection.getContent({ format: 'text' });
        }
        scrollToBottom() {
            this.editor.getWin().scrollTo(0, this.editor.getBody().scrollHeight);
        }
        setValue(arg) {
            if (this.editor) {
                this.editor.setContent(arg);
            }
            //   tinymce.get('mceeditor').setContent(arg);
        }
        getValue() {
            if (this.editor) {
                return this.editor.getContent({
                    format: "text"
                });
            }
            return null;
            var myContent = tinymce.get(this.selectorId).getContent({
                format: "text"
            });
            return myContent;
        }
    }
    if (typeof window !== 'undefined') {
        global.TinyMceUtil = TinyMceUtil;
    } else {
        if (typeof module !== 'undefined') {
            //      console.log(" zzzzz module:[" , module  , "]");
            module.exports = TinyMceUtil;
        }
        if (typeof define === 'function') {
            //          console.log(" zzzzz define:[" , define  , "]");
            define(TinyMceUtil);
        }
    }
})(this);
