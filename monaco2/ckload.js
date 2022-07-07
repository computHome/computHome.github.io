(async () => {
    window._editor2 = await CKEDITOR.ClassicEditor.create(document.getElementById("editor2"), {
        // https://ckeditor.com/docs/ckeditor5/latest/features/toolbar/toolbar.html#extended-toolbar-configuration-format
        toolbar: {
            items: [
                'exportPDF', 'exportWord', '|',
                'findAndReplace', 'selectAll', '|',
                'heading', '|',
                'bold', 'italic', 'strikethrough', 'underline', 'code', 'subscript',
                'superscript',
                'removeFormat', '|',
                'bulletedList', 'numberedList', 'todoList', '|',
                'outdent', 'indent', '|',
                'undo', 'redo',
                '-',
                'fontSize', 'fontFamily', 'fontColor', 'fontBackgroundColor', 'highlight', '|',
                'alignment', '|',
                'link', 'insertImage', 'blockQuote', 'insertTable', 'mediaEmbed', 'codeBlock',
                'htmlEmbed',
                '|',
                'specialCharacters', 'horizontalLine', 'pageBreak', '|',
                'textPartLanguage', '|',
                'sourceEditing'
            ],
            shouldNotGroupWhenFull: true
        },
        // Changing the language of the interface requires loading the language file using the <script> tag.
        // language: 'es',
        list: {
            properties: {
                styles: true,
                startIndex: true,
                reversed: true
            }
        },
        // https://ckeditor.com/docs/ckeditor5/latest/features/headings.html#configuration
        heading: {
            options: [{
                model: 'paragraph',
                title: 'Paragraph',
                class: 'ck-heading_paragraph'
            },
            {
                model: 'heading1',
                view: 'h1',
                title: 'Heading 1',
                class: 'ck-heading_heading1'
            },
            {
                model: 'heading2',
                view: 'h2',
                title: 'Heading 2',
                class: 'ck-heading_heading2'
            },
            {
                model: 'heading3',
                view: 'h3',
                title: 'Heading 3',
                class: 'ck-heading_heading3'
            },
            {
                model: 'heading4',
                view: 'h4',
                title: 'Heading 4',
                class: 'ck-heading_heading4'
            },
            {
                model: 'heading5',
                view: 'h5',
                title: 'Heading 5',
                class: 'ck-heading_heading5'
            },
            {
                model: 'heading6',
                view: 'h6',
                title: 'Heading 6',
                class: 'ck-heading_heading6'
            }
            ]
        },
        // https://ckeditor.com/docs/ckeditor5/latest/features/editor-placeholder.html#using-the-editor-configuration
        placeholder: 'Welcome to CKEditor 5!',
        // https://ckeditor.com/docs/ckeditor5/latest/features/font.html#configuring-the-font-family-feature
        fontFamily: {
            options: [
                'default',
                'Arial, Helvetica, sans-serif',
                'Courier New, Courier, monospace',
                'Georgia, serif',
                'Lucida Sans Unicode, Lucida Grande, sans-serif',
                'Tahoma, Geneva, sans-serif',
                'Times New Roman, Times, serif',
                'Trebuchet MS, Helvetica, sans-serif',
                'Verdana, Geneva, sans-serif'
            ],
            supportAllValues: true
        },
        // https://ckeditor.com/docs/ckeditor5/latest/features/font.html#configuring-the-font-size-feature
        fontSize: {
            options: [10, 12, 14, 'default', 18, 20, 22],
            supportAllValues: true
        },
        // Be careful with the setting below. It instructs CKEditor to accept ALL HTML markup.
        // https://ckeditor.com/docs/ckeditor5/latest/features/general-html-support.html#enabling-all-html-features
        htmlSupport: {
            allow: [{
                name: /.*/,
                attributes: true,
                classes: true,
                styles: true
            }]
        },
        // Be careful with enabling previews
        // https://ckeditor.com/docs/ckeditor5/latest/features/html-embed.html#content-previews
        htmlEmbed: {
            showPreviews: true
        },
        // https://ckeditor.com/docs/ckeditor5/latest/features/link.html#custom-link-attributes-decorators
        link: {
            decorators: {
                addTargetToExternalLinks: true,
                defaultProtocol: 'https://',
                toggleDownloadable: {
                    mode: 'manual',
                    label: 'Downloadable',
                    attributes: {
                        download: 'file'
                    }
                }
            }
        },
        // https://ckeditor.com/docs/ckeditor5/latest/features/mentions.html#configuration
        mention: {
            feeds: [{
                marker: '@',
                feed: [
                    '@apple', '@bears', '@brownie', '@cake', '@cake', '@candy', '@canes',
                    '@chocolate', '@cookie', '@cotton', '@cream',
                    '@cupcake', '@danish', '@donut', '@dragée', '@fruitcake',
                    '@gingerbread',
                    '@gummi', '@ice', '@jelly-o',
                    '@liquorice', '@macaroon', '@marzipan', '@oat', '@pie', '@plum',
                    '@pudding',
                    '@sesame', '@snaps', '@soufflé',
                    '@sugar', '@sweet', '@topping', '@wafer'
                ],
                minimumCharacters: 1
            }]
        },
        // The "super-build" contains more premium features that require additional configuration, disable them below.
        // Do not turn them on unless you read the documentation and know how to configure them and setup the editor.
        removePlugins: [
            // These two are commercial, but you can try them out without registering to a trial.
            // 'ExportPdf',
            // 'ExportWord',
            'CKBox',
            'CKFinder',
            'EasyImage',
            // This sample uses the Base64UploadAdapter to handle image uploads as it requires no configuration.
            // https://ckeditor.com/docs/ckeditor5/latest/features/images/image-upload/base64-upload-adapter.html
            // Storing images as Base64 is usually a very bad idea.
            // Replace it on production website with other solutions:
            // https://ckeditor.com/docs/ckeditor5/latest/features/images/image-upload/image-upload.html
            // 'Base64UploadAdapter',
            'RealTimeCollaborativeComments',
            'RealTimeCollaborativeTrackChanges',
            'RealTimeCollaborativeRevisionHistory',
            'PresenceList',
            'Comments',
            'TrackChanges',
            'TrackChangesData',
            'RevisionHistory',
            'Pagination',
            'WProofreader',
            // Careful, with the Mathtype plugin CKEditor will not load when loading this sample
            // from a local file system (file://) - load this site via HTTP server if you enable MathType
            'MathType'
        ]
    });
    window._editor2.setData('fasdf fsfsffsfa <br>fasdf fsfsffsfa <br>fasdf fsfsffsfa <br>fasdf fsfsffsfa <br>fasdf fsfsffsfa <br>fasdf fsfsffsfa <br>fasdf fsfsffsfa <br>fasrecords  df fsfsffsfa <br>fasdf fsfsffsfa <br>fasdf fsfsffsfa <br>fasdf fsfsffsfa <br>fasdf fsfsffsfa <br>fasdf fsfsffsfa <br>fasdf fsfsffsfa <br>fasdf fsfsffsfa <br>fasdf fsfsffsfa <br>fasdf fsfsffsfa <br>fasdf fsfs  records ffsfa <br>fasdf fsfsffsfa <br>fasdf fsfsffsfa <br>fasdf fsfsffsfa <br>fasdf fsfsffsfa <br>fasdf fsfsffsfa <br>fasdf fsfsffsfa <br>fasdf fsfsffsfa <br>fasdf fsfsffsfa <br>fasdf fsfsffsfa <br>fasdf fsfsffsfa <br>fasdf fsfsffsfa <br>fasdf fsfsffsfa <br>')

    // alert('test');
    document.querySelector('#btest').onclick = () => {
        window._editor2.execute('find', 'a');


    }


    window._editor2.on("mouseup", function () {
        alert('test');

    });


    var getSelectedText = function (editor) {
        var selectedText = '';
        var selection = editor.getSelection();
        if (selection.getType() == CKEDITOR.SELECTION_TEXT) {
            if (CKEDITOR.env.ie) {
                selection.unlock(true);
                selectedText = selection.getNative().createRange().text;
            } else {
                selectedText = selection.getNative();
            }
        }
        return (selectedText);
    }

    window._editor2.editing.view.document.on('mouseup', evt => {
        console.log('mouseup!', evt)

        //   let txt = window._editor2.getSelection().getSelectedText();
        //   var txt = getSelectedText(window._editor2);

        /*
          var txt = window._editor2
                    .getSelectedHtml()
                    .getHtml(); //result: <p>test</p>
        
        */


        /*
        
                var editor = window._editor2,
                    range = editor.getSelection().getRanges()[0],
                    el = editor.document.createElement('div');
        
                el.append(range.cloneContents());
                console.log(el.getHtml());
        
        */


        const editor = window._editor2;
        const selection = editor.model.document.selection;
        const range = selection.getFirstRange();
        let out = "";
        for (const item of range.getItems()) {
            //  console.log(item.data) //return the selected text

            if (item.data) {
                out += item.data + "\n";
            }

        }
        out = out.trim();

        console.log("out:   [", out, "]");


        if (out.indexOf("\n") < 0) {
            window._editor2.execute('find', out);
            window.hilite(out)
        }




        //  console.log("txt:   [", txt, "]");



    });


    /*
    
    
        this.listenTo(editor.plugins.get('Clipboard'), 'inputTransformation', (evt, data) => {
            if (data.content.childCount == 1 && isUrlText(data.content.getChild(0))) {
                const linkUrl = data.content.getChild(0).data;
    
                data.content = new ViewDocumentFragment([
                    ViewElement(
                        'a',
                        { href: linkUrl },
                        [new ViewText(linkUrl)]
                    )
                ]);
            }
        });
    */
















})();


