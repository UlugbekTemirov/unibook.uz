import React, { useRef } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { Editor } from "@tinymce/tinymce-react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./TextEditor.scss";
import UploadImage from "../UploadImage/UploadImage";
import parse from "html-react-parser";
import { addComment } from "../../pages/SingleQuestion/question_slice";
import { addCommentToBase } from "../../pages/SingleQuestion/question_slice";

export default function TextEditor({ id, toggleAddCommentHandler }) {
  const editorRef = useRef(null);
  const inputRef = useRef(null);
  const [image, setImage] = useState(null);
  const [img, setImg] = useState(null);
  const [uploadImage, setUploadImage] = useState(false);
  const [text, setText] = useState("");

  const { question } = useSelector((state) => state.comment);
  const dispatch = useDispatch();

  const imageHandler = () => {
    setUploadImage((prev) => !prev);
  };

  const sendHandler = () => {
    const newComment = {
      id: nanoid(),
      commentContent: text,
      commentImage: img,
    };
    const newQuestion = {
      ...question,
      comments: [newComment, ...question.comments],
    };
    dispatch(addComment(newComment));
    dispatch(addCommentToBase({ id, newQuestion }));
  };

  const getBase64 = (e) => {
    var file = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImg(reader.result);
    };
    reader.onerror = function (error) {
      console.log("Error: ", error);
    };
  };

  return (
    <div className="text-editor">
      <Editor
        onEditorChange={(e) => {
          setText(parse(e).props.children);
        }}
        placeholder={text.length ? "" : "fill this area"}
        onInit={(evt, editor) => {
          editorRef.current = editor;
        }}
        initialValue="<p>This is the initial content of the editor.</p>"
        init={{
          height: 400,
          menubar: false,
          statusbar: false,
          plugins: [
            "advlist",
            "advcode",
            "advtable",
            "autolink",
            "checklist",
            "export",
            "lists",
            "link",
            "image",
            "charmap",
            "preview",
            "anchor",
            "searchreplace",
            "visualblocks",
            "powerpaste",
            "fullscreen",
            "formatpainter",
            "insertdatetime",
            "media",
            "table",
            "help",
            "wordcount",
          ],
          toolbar:
            "undo redo | bold italic backcolor | " +
            "alignleft aligncenter alignright alignjustify | " +
            `bullist numlist checklist outdent indent |  code table help }`,
        }}
      />
      <input
        type="file"
        name="image"
        id="image"
        ref={inputRef}
        onChange={(e) => {
          setImage(e.target.files[0]);
          getBase64(e);
        }}
        style={{ display: "none" }}
      />
      <div className="btns d-flex align-items-center justify-content-between mt-2">
        <div>
          <button
            onClick={() => inputRef.current.click()}
            className="btn btn-info text-white"
          >
            Upload image
          </button>
          {image ? (
            <span
              onClick={imageHandler}
              style={{ cursor: "pointer", marginLeft: "0.5rem" }}
            >
              {image.name.slice(0, 8)}...
            </span>
          ) : null}
        </div>
        <div className="btn-group">
          <button
            className="btn send-btn"
            onClick={() => {
              setImage(null);
              toggleAddCommentHandler();
              setText("");
            }}
          >
            Cancel
          </button>
          <button onClick={sendHandler} className="btn send-btn mx-1">
            Send
          </button>
        </div>
      </div>
      {uploadImage ? (
        <UploadImage url={img} imageHandler={imageHandler} />
      ) : null}
    </div>
  );
}
