import './App.scss';
import TextArea from "./components/TextArea/TextArea";
import TypingArea from "./components/TypingArea/TypingArea";
import React, {useEffect, useState} from "react";

import mockedData from './sentences.json';
import KeyboardVisualizator from "./components/KeyboardVisualizator/KeyboardVisualizator";
import {disassemble} from "hangul-js";
import Select from "react-select";

const options = [
    { value: 'advanced', label: 'Advanced' },
    // { value: 'beginner', label: 'Words' }, //TODO: Add words select
    { value: 'start', label: 'Letters' },
];

// TODO: Add selection saving based on sessionStorage or by router params

function App() {
    const [selectedOption, setSelectedOption] = useState(options[0]);
    const [data, setData] = useState(extractDataFromJSON(mockedData, options[0]));
    const [inputData, setInputData] = useState('');
    const [nextLetter, setNextLetter] = useState();
    const [isError, setIsError] = useState(false);


    useEffect(() => {
        if (data.length) {
            const disassembledSentence = disassemble(data[0]).join('');
            const _nextLetter = disassembledSentence.replace(disassemble(inputData).join(''), '').charAt(0);
            setNextLetter(_nextLetter);
        } else {
            setData(extractDataFromJSON(mockedData, selectedOption))
        }
    }, [data, inputData, selectedOption]);

    useEffect(() => {
        setInputData('');
        setData(extractDataFromJSON(mockedData, selectedOption));
    }, [selectedOption])

    return (
        <div className="App">
            <div className="settings">
                <Select
                    value={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                />
            </div>
          <div className="workspace">
              {
                  // TODO: Less kolhoznui method
                  data.length &&
                  <>
                      <TypingArea sentence={data[0]} setSentence={setData} inputData={inputData} setInputData={setInputData} isError={isError} setIsError={setIsError} />
                      <TextArea text={data}  />
                      <KeyboardVisualizator nextLetter={nextLetter} isError={isError} />
                  </>
              }
          </div>
        </div>
  );
}


function extractDataFromJSON(data, selectedOption) {
    if (!data) return [];

    if (selectedOption.value === 'start') {
        const chars = [
            'ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ',
            'ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ', 'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ'
        ];

        return new Array(1).fill(`${chars[Math.floor(Math.random() * chars.length)]} `.repeat(40))
    }

    return data[selectedOption.value][Math.floor(Math.random() * data[selectedOption.value].length)].split(". ");
}



export default App;
