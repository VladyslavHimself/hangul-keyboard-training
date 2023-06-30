import React from 'react';
import './KeyboardKeycap.scss';

export function KeyboardKeycap({ keycapData, isAlt }) {
    const { mainChar, size, altChar } = keycapData;

    return (
        <div className="keyboard-keycap" style={{ width: size !== 'sm' ? `${size}px` : '50px'}}>
            {isAlt && altChar ? altChar : mainChar}
        </div>
    );
};