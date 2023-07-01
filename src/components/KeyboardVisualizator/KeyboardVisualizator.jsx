import React, {useEffect, useState} from 'react';
import './KeyboardVisualizator.scss';
import {KeyboardKeycap} from "../KeyboardKeycap/KeyboardKeycap";

const objectTemplate = {
    firstRow: [
        {
            mainChar: '₩',
            altChar: '~',
            size: 'sm',
        },

        {
            mainChar: '1',
            altChar: '!',
            size: 'sm',
        },

        {
            mainChar: '2',
            altChar: '@',
            size: 'sm',
        },

        {
            mainChar: '3',
            altChar: '#',
            size: 'sm',
        },

        {
            mainChar: '4',
            altChar: '$',
            size: 'sm',
        },

        {
            mainChar: '5',
            altChar: '%',
            size: 'sm',
        },

        {
            mainChar: '6',
            altChar: '^',
            size: 'sm',
        },

        {
            mainChar: '7',
            altChar: '&',
            size: 'sm',
        },

        {
            mainChar: '8',
            altChar: '*',
            size: 'sm',
        },

        {
            mainChar: '9',
            altChar: '(',
            size: 'sm',
        },

        {
            mainChar: '0',
            altChar: ')',
            size: 'sm',
        },

        {
            mainChar: '-',
            altChar: '_',
            size: 'sm',
        },

        {
            mainChar: '=',
            altChar: '+',
            size: 'sm',
        },

        {
            mainChar: 'backspace',
            size: '91',
        },
    ],
    secondRow: [
        {
            mainChar: 'Tab',
            size: '88',
        },

        {
            mainChar: 'ㅂ',
            altChar: 'ㅃ',
            size: 'sm',
        },

        {
            mainChar: 'ㅈ',
            altChar: 'ㅉ',
            size: 'sm',
        },

        {
            mainChar: 'ㄷ',
            altChar: 'ㄸ',
            size: 'sm',
        },

        {
            mainChar: 'ㄱ',
            altChar: 'ㄲ',
            size: 'sm',
        },

        {
            mainChar: 'ㅅ',
            altChar: 'ㅆ',
            size: 'sm',
        },

        {
            mainChar: 'ㅛ',
            size: 'sm',
        },

        {
            mainChar: 'ㅕ',
            size: 'sm',
        },

        {
            mainChar: 'ㅑ',
            size: 'sm',
        },

        {
            mainChar: 'ㅐ',
            altChar: 'ㅒ',
            size: 'sm',
        },

        {
            mainChar: 'ㅔ',
            altChar: 'ㅖ',
            size: 'sm',
        },

        {
            mainChar: '[',
            altChar: '{',
            size: 'sm',
        },

        {
            mainChar: ']',
            altChar: '}',
            size: 'sm',
        },

        {
            mainChar: "\\",
            altChar: "|",
            size: 'sm',
        },
    ],
    thirdRow: [
        {
            mainChar: 'Caps Lock',
            size: '100',
        },

        {
            mainChar: 'ㅁ',
            size: 'sm',
        },

        {
            mainChar: 'ㄴ',
            size: 'sm',
        },

        {
            mainChar: 'ㅇ',
            size: 'sm',
        },

        {
            mainChar: 'ㄹ',
            size: 'sm',
            isFingerDetector: true
        },

        {
            mainChar: 'ㅎ',
            size: 'sm',
        },

        {
            mainChar: 'ㅗ',
            size: 'sm',
        },

        {
            mainChar: 'ㅓ',
            size: 'sm',
            isFingerDetector: true
        },

        {
            mainChar: 'ㅏ',
            size: 'sm',
        },

        {
            mainChar: 'ㅣ',
            size: 'sm',
        },

        {
            mainChar: ';',
            altChar: ':',
            size: 'sm',
        },

        {
            mainChar: '\'',
            altChar: '"',
            size: 'sm',
        },

        {
            mainChar: 'return',
            size: '91',
        }
    ],
    fourthRow: [
        {
            mainChar: 'Shift',
            size: '120',
        },

        {
            mainChar: 'ㅋ',
            size: 'sm',
        },

        {
            mainChar: 'ㅌ',
            size: 'sm',
        },

        {
            mainChar: 'ㅊ',
            size: 'sm',
        },

        {
            mainChar: 'ㅍ',
            size: 'sm',
        },

        {
            mainChar: 'ㅠ',
            size: 'sm',
        },

        {
            mainChar: 'ㅜ',
            size: 'sm',
        },

        {
            mainChar: 'ㅡ',
            size: 'sm',
        },

        {
            mainChar: ',',
            altChar: '<',
            size: 'sm',
        },

        {
            mainChar: '.',
            altChar: '>',
            size: 'sm',
        },

        {
            mainChar: '/',
            altChar: '?',
            size: 'sm',
        },

        {
            mainChar: 'Shift',
            size: '120', // TODO: Add another variant for 120px;
        }
    ],
    fifthRow: [
        {
            mainChar: 'Space',
            size: '338',
        },

        {
            mainChar: 'Alt',
            size: 'sm',
        }
    ],
}

export default function KeyboardVisualizator({ nextLetter, isError }) {
    const [isShiftPressed, setIsShiftPressed] = useState(false);

    useEffect(() => {
        const handleKeyDown = (event) => {
            console.log('Key pressed:', event.key);

            if (event.key === 'Shift') {
                setIsShiftPressed(true);
            }

        };

        const handleKeyUp = (event) => {
            console.log('Key up:', event.key);

            if (event.key === 'Shift') {
                setIsShiftPressed(false);
            }

        };

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    // TODO: Optimize this hardcode later in better way. MORE OPTIMIZATION!!!!@12121
    return (
        <div className="virtual-keyboard-container">
            <div className="virtual-keyboard-row">
                {
                    objectTemplate.firstRow.map(keycap => <KeyboardKeycap keycapData={keycap} isAlt={isShiftPressed} nextLetter={nextLetter} isError={isError} />)
                }
            </div>
            <div className="virtual-keyboard-row">
                {
                    objectTemplate.secondRow.map(keycap => <KeyboardKeycap keycapData={keycap} isAlt={isShiftPressed} nextLetter={nextLetter} isError={isError} />)
                }
            </div>
            <div className="virtual-keyboard-row">
                {
                    objectTemplate.thirdRow.map(keycap => <KeyboardKeycap keycapData={keycap} isAlt={isShiftPressed} nextLetter={nextLetter} isError={isError} />)
                }
            </div>
            <div className="virtual-keyboard-row">
                {
                    objectTemplate.fourthRow.map(keycap => <KeyboardKeycap keycapData={keycap} isAlt={isShiftPressed} nextLetter={nextLetter} isError={isError} />)
                }
            </div>
            <div className="virtual-keyboard-row f-center">
                {
                    objectTemplate.fifthRow.map(keycap => <KeyboardKeycap keycapData={keycap} isAlt={isShiftPressed} nextLetter={nextLetter} isError={isError} />)
                }
            </div>
        </div>
    );
}

