import React, {useEffect, useState} from 'react';
import './KeyboardKeycap.scss';

export function KeyboardKeycap({ keycapData, isAlt, nextLetter}) {
    const { mainChar, size, altChar, isFingerDetector } = keycapData;
    const [isHighlighted, setIsHighlighted] = useState(false);


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
            backgroundColor: isHighlighted ? 'red' : 'transparent'
        }}>
            {isAlt && altChar ? altChar : mainChar}
        </div>
    );
}