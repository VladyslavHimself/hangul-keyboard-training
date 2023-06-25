import './TypingArea.scss';
import {useEffect, useState} from "react";
import {disassemble, isHangul} from "hangul-js";
export default function TypingArea({ sentence }) {
    const [inputData, setInputData] = useState('');
    const [isError, setIsError] = useState(false);
    const [disassembledSentence] = useState(disassemble(sentence).join(''));

    const isInputRulesetValid =
        inputData.length > 0
        &&
        !disassembledSentence.startsWith(disassemble(inputData).join(''));

    useEffect(() => {
        if (isInputRulesetValid) {
            setIsError(true);
            return;
        }

        setIsError(false);
    }, [isInputRulesetValid])

    return (
        <div className="text-type-area">
            <input
                style={{ backgroundColor: isError ? 'yellow' : 'transparent' }}
                onChange={({ target : { value } }) => setInputData(value)}
            />
            {isError && <div>Error!</div>}
        </div>
    );
}

function convertToStack(raw) {
    return raw.split(' ');
}

function getLastWord(str) {
    const words = str.split(" ");

    const lastWord = words[words.length - 1];
    const hasHangul = isHangul(lastWord);

    return hasHangul ? lastWord : null;
}