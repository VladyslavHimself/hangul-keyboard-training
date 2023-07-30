import React from "react";
import TypingArea from "../TypingArea/TypingArea";
import TextArea from "../TextArea/TextArea";
import KeyboardVisualizator from "../KeyboardVisualizator/KeyboardVisualizator";
import './Workspace.scss';

export default function Workspace({
  data,
  setData,
  inputData,
  setInputData,
  isError,
  setIsError,
  isKeyboardVisible,
  nextLetter
}) {
    return (
        <div className="workspace">
            <TypingArea
                sentence={data[0]}
                setSentence={setData}
                inputData={inputData}
                setInputData={setInputData}
                isError={isError}
                setIsError={setIsError}
            />
            <TextArea text={data}  />
            { isKeyboardVisible &&<KeyboardVisualizator nextLetter={nextLetter} isError={isError} /> }
        </div>
    );
};