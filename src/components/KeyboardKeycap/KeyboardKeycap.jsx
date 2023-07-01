import React, {useEffect, useState} from 'react';
import './KeyboardKeycap.scss';

export function KeyboardKeycap({ keycapData, isAlt, nextLetter, isError}) {
    const { mainChar, size, altChar, isFingerDetector } = keycapData;
    const [isHighlighted, setIsHighlighted] = useState(false);


    // TODO: Refactor to better solution, it consist to all component..., program...
    const isShiftNeededValidationRule = mainChar === 'Shift' && '~!@#$%^&*()-_+{}|:"<>?ㅃㅉㄸㄲㅆㅒㅖ'.match(nextLetter)
    const isBackspaceNeededValidationRule = mainChar === 'backspace' && isError;
    const isSpaceValidationRule = mainChar === "Space" && nextLetter === ' '

    useEffect(() => {
        if (mainChar === nextLetter || altChar === nextLetter) {
            setIsHighlighted(true);
            return;
        }

        setIsHighlighted(false);
    }, [altChar, mainChar, nextLetter])

    return (
        <div className="keyboard-keycap" style={{
            width: size !== 'sm' ? `${size}px` : '50px',
            textDecoration: isFingerDetector ? 'underline' : 'none',
            backgroundColor: ((isHighlighted  || isShiftNeededValidationRule || isSpaceValidationRule) && !isError) || isBackspaceNeededValidationRule ? '#A1A8AA' : 'transparent'
        }}>
            {isAlt && altChar ? altChar : mainChar}
        </div>
    );
}