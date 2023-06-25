import React, {useState} from 'react';
import './TextArea.scss';

export default function TextArea({ text }) {
    const [visibileLines, setVisibleLines] = useState(text);
    return (
        <div className="text-paragraph-area">
            <p>{visibileLines}</p>
        </div>
    );
}