import React, {useState} from 'react';
import '../styles/index.css';

export const ChipButton = ({name, label, onClick, children, disabled}) => {
    const [eventTransitionClass, setEventTransitionClass] = useState("chip-button-hover-out");
    return (
        <React.Fragment>
            <button name={name} className={`chip-button ${eventTransitionClass}`} disabled={disabled} onClick={(e) => {
                setEventTransitionClass("chip-button-pressed");
                setTimeout(() => {
                    setEventTransitionClass("chip-button-hover-out");
                }, 200);
                if (typeof onClick === "function") {
                    onClick(e);
                }
            }} onMouseOver={() => setEventTransitionClass("chip-button-hover-in")}
                    onMouseOut={() => setEventTransitionClass("chip-button-hover-out")}><span
                className="chip-button-label">{label}</span>{children}</button>
        </React.Fragment>
    );
}