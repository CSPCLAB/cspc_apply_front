import React from 'react'
import { Link } from 'react-router-dom'

import './styles/GoToApply.css'

const GoToApply = ({ top, left }) => {
    return (
        <div className="GoToApplyStyle" style={{ top: top, left: left }}>
            <Link to="/login">
                <button className="GoToButtonStyle">지원하기</button>
            </Link>
        </div>
    )
}

export default GoToApply
