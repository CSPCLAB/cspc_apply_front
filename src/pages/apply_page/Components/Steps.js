import React from 'react';
import { useState } from 'react';

import './Components.css';

import StepButton from './StepButton';

const ThreeSteps = () => {
    const [step, setStep] = useState({
        agree: 1,
        write: 0,
        apply: 0,
    });

    return(
        <div
            className="StepStyle"
        >
            <StepButton selected={step} children='개인정보 동의'/>
            <StepButton selected={step} children='지원서 작성'/>
            <StepButton selected={step} children='제출'/>
        </div>
    );
};

export default ThreeSteps;