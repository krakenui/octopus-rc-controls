import React from 'react';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';

class RichtextEditorComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            editorState: EditorState.createEmpty(),
        };

        if (props.defaultContent) {
            this.initFromHtml(props.defaultContent);
        }
    }

    initFromHtml = (html, encode = true) => {
        if (encode) {
            html = decodeURI(html);
        }

        const contentBlock = htmlToDraft(html);
        if (contentBlock) {
            const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
            const editorState = EditorState.createWithContent(contentState);
            this.setState({
                editorState,
            });
        }
    };

    uploadImageCallBack = file => {
        const _self = this;
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open('POST', 'https://api.imgur.com/3/image');
            xhr.setRequestHeader('Authorization', `Client-ID ${this.props.imgurId ? this.props.imgurId : '3aae9208fae2a49'}`);
            const data = new FormData();
            data.append('image', file);
            xhr.send(data);
            xhr.addEventListener('load', () => {
                const response = JSON.parse(xhr.responseText);
                if (response.data && response.data.link) {
                    _self.quickUploadShow(response.data.link);
                }
                resolve(response);
            });
            xhr.addEventListener('error', () => {
                const error = JSON.parse(xhr.responseText);
                reject(error);
            });
        });
    };

    quickUploadShow = url => {
        const elms = document.getElementsByClassName('rdw-image-modal-upload-option-label');
        if (elms && elms.length > 0) {
            const elm = elms.item(0);
            const parentElm = elm.parentElement;

            parentElm.innerHTML = `<img src="${url}" alt="${url}" class="rdw-image-modal-upload-option-image-preview">`;
        }
    };

    onEditorStateChange = editorState => {
        this.setState({
            editorState,
        });
    };

    toHtml = (encode = true) => {
        const { editorState } = this.state;
        let html = draftToHtml(convertToRaw(editorState.getCurrentContent()));

        if (encode) {
            html = encodeURI(html);
        }

        return html;
    };

    onPrimaryClick = event => {
        const contentElms = event.target.getElementsByClassName('sc-content');

        if (contentElms && contentElms.length > 0) {
            const contentElm = contentElms.item(0);
            contentElm.click();
        }
    };

    render() {
        const { editorState } = this.state;
        return (
            <div className="sc-editor" onClick={this.onPrimaryClick}>
                <div className="content">
                    <Editor
                        editorState={editorState}
                        wrapperClassName="sc-wrapper"
                        editorClassName="sc-content"
                        onEditorStateChange={this.onEditorStateChange}
                        toolbar={{
                            image: { uploadCallback: this.uploadImageCallBack, alt: { present: true, mandatory: true } },
                        }}
                    />
                </div>
                {this.props.children && <div className="children">{this.props.children}</div>}
            </div>
        );
    }
}

export default RichtextEditorComponent;
