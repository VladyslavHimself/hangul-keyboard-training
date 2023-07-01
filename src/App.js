import './App.scss';
import TextArea from "./components/TextArea/TextArea";
import TypingArea from "./components/TypingArea/TypingArea";
import {useEffect, useState} from "react";

import mockedData from './sentences.json';
import KeyboardVisualizator from "./components/KeyboardVisualizator/KeyboardVisualizator";
import {disassemble} from "hangul-js";

function App() {
    const [data, setData] = useState(convertStringToArray(mockedData));
    const [inputData, setInputData] = useState('');
    const [nextLetter, setNextLetter] = useState();

    useEffect(() => {
        const disassembledSentence = disassemble(data[0]).join('');
        const _nextLetter = disassembledSentence.replace(disassemble(inputData).join(''), '').charAt(0);
        setNextLetter(_nextLetter);
    }, [data, inputData]);

    return (
        <div className="App">
          <div className="workspace">
              <TypingArea sentence={data[0]} setSentence={setData} inputData={inputData} setInputData={setInputData} />
              <TextArea text={data}  />
              <KeyboardVisualizator nextLetter={nextLetter} />
          </div>
        </div>
  );
}


function convertStringToArray(string) {
    return string.split(". ");
}



export default App;
