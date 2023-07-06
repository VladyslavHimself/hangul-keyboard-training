import './App.scss';
import TextArea from "./components/TextArea/TextArea";
import TypingArea from "./components/TypingArea/TypingArea";
import {useEffect, useState} from "react";

import mockedData from './sentences.json';
import KeyboardVisualizator from "./components/KeyboardVisualizator/KeyboardVisualizator";
import {disassemble} from "hangul-js";

function App() {
    const [data, setData] = useState(extractDataFromJSON(mockedData));
    const [inputData, setInputData] = useState('');
    const [nextLetter, setNextLetter] = useState();
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const disassembledSentence = disassemble(data[0]).join('');
        const _nextLetter = disassembledSentence.replace(disassemble(inputData).join(''), '').charAt(0);
        setNextLetter(_nextLetter);
    }, [data, inputData]);

    return (
        <div className="App">
          <div className="workspace">
              <TypingArea sentence={data[0]} setSentence={setData} inputData={inputData} setInputData={setInputData} isError={isError} setIsError={setIsError} />
              <TextArea text={data}  />
              <KeyboardVisualizator nextLetter={nextLetter} isError={isError} />
          </div>
        </div>
  );
}


function extractDataFromJSON(data) {
    return data[Math.floor(Math.random() * data.length)].split(". ");
}



export default App;
