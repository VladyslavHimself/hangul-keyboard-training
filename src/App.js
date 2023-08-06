import './App.scss';
import mockedData from './sentences.json';
import React, {useEffect, useState} from "react";
import {disassemble} from "hangul-js";
import Workspace from "./components/Workspace/Workspace";
import Settings from "./components/Settings/Settings";
import useSessionStorage from "./hooks/useSessionStorage";

const options = [
    { value: 'advanced', label: 'Advanced' },
    { value: 'words', label: 'Words' },
    { value: 'letters', label: 'Letters' },
];

function App() {
    const [selectedTypeOption, setSelectedTypeOption] = useSessionStorage('selected-typing-option', options[0])
    const [data, setData] = useState(extractDataFromJSON(mockedData, selectedTypeOption));
    const [inputData, setInputData] = useState('');
    const [nextLetter, setNextLetter] = useState();
    const [isError, setIsError] = useState(false);
    const [isKeyboardVisible, setIsKeyboardVisible] = useState(true);

    useEffect(() => {
        if (data.length) {
            const disassembledSentence = disassemble(data[0]).join('');
            const _nextLetter = disassembledSentence.replace(disassemble(inputData).join(''), '').charAt(0);
            setNextLetter(_nextLetter);
        } else {
            setData(extractDataFromJSON(mockedData, selectedTypeOption))
        }
    }, [data, inputData, selectedTypeOption]);

    useEffect(() => {
        setInputData('');
        setData(extractDataFromJSON(mockedData, selectedTypeOption));
    }, [selectedTypeOption])

    return (
        <div className="App">
            <Settings
                options={options}
                isKeyboardVisible={isKeyboardVisible}
                toggleKeyboardVisibility={toggleKeyboardVisibility}
                selectedOption={selectedTypeOption}
                setSelectedOption={setSelectedTypeOption}
            />

            {data.length &&
                <Workspace
                    data={data}
                    setData={setData}
                    inputData={inputData}
                    setInputData={setInputData}
                    isError={isError}
                    setIsError={setIsError}
                    isKeyboardVisible={isKeyboardVisible}
                    nextLetter={nextLetter}
                />
            }
        </div>
  );

    function toggleKeyboardVisibility() {
        setIsKeyboardVisible(prevState => !prevState)
    }
}


function extractDataFromJSON(data, selectedOption) {
    if (!data) return [];

    if (selectedOption.value === 'letters') {
        const chars = [
            'ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ',
            'ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ', 'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ'
        ];

        return new Array(1).fill(`${chars[Math.floor(Math.random() * chars.length)]} `.repeat(40))
    }

    if (selectedOption.value === 'words') {
        return Array.from(
            { length: data.words.length },
            (_, i) => new Array(10).fill(data.words[i]).join(' ')
        );
    }


    return data[selectedOption.value][Math.floor(Math.random() * data[selectedOption.value].length)].split(". ");
}

export default App;
