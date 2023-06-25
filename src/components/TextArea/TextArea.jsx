import React from 'react';
import './TextArea.scss';

export default function TextArea({ text }) {

    return (
        <div className="text-paragraph-area">
            <p>{ text.map((text, idx) => idx < 3 && <React.Fragment key={text}>{text}<br /></React.Fragment> )}</p>
        </div>
    );
}