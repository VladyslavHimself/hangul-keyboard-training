import './TypingArea.scss';
import {useEffect, useRef, useState} from "react";
import {disassemble} from "hangul-js";
export default function TypingArea({ sentence, setSentence, inputData, setInputData, isError, setIsError }) {
    const inputRef = useRef(null);


    const disassembledSentence = disassemble(sentence).join('');

    useEffect(() => {
        if (inputData === sentence) {
            setSentence(prevState => prevState.slice(1));
            setInputData('');
            // TODO: Check methods with CompositionEvents for hangul and replace this method
            inputRef.current.blur();
            inputRef.current.focus();
        }
        if (inputData.length > 0 && !disassembledSentence.startsWith(disassemble(inputData).join(''))) {
            setIsError(true);
            return;
        }
        setIsError(false);
    }, [inputData, disassembledSentence, sentence, setSentence])

    return (
        <div className="text-type-area">
            <input
                ref={inputRef}
                value={inputData}
                style={{ backgroundColor: isError ? 'yellow' : 'transparent' }}
                onChange={({ target : { value } }) => setInputData(value)}
            />
            {isError && <div>Error!</div>}
        </div>
    );
}
