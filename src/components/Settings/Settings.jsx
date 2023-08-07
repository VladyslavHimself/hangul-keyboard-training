import Select from "react-select";
import React from "react";
import './Settings.scss';

export default function Settings({
     toggleKeyboardVisibility,
     isKeyboardVisible,
     selectedOption,
     setSelectedOption,
     options
}) {
    return (
        <div className="settings">
            <button onClick={toggleKeyboardVisibility} className="s-keyboard-visibility-button">
                    <span className="material-symbols-outlined">
                        {isKeyboardVisible ? "visibility" : "visibility_off"}
                    </span>
            </button>
            <Select
                value={selectedOption}
                onChange={setSelectedOption}
                options={options}
                className="s-type-selection"
            />
        </div>
    );
};