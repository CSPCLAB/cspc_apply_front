import React from 'react'

import img_1 from '../../../../assets/images/main/main_img_1.png'

import GoToApply from '../../../../components/GoToApply'
import { Link } from 'react-router-dom'
import '../styles/ImgMain.css'

const FirstImg = () => {
    return (
        <div className="ImgMainBox">
            <img src={img_1} className="ImgMainStyle" />
            <div className="ImgMainLetterBox_1 WhiteWord ImgMain_1_Title">
                2023 1학기 신입 부원 모집
            </div>
            <div
                className="GoToApplyStyle"
                style={{ justifyContent: 'center', bottom: '50px' }}
            >
                <Link to="/login">
                    <button className="GoToButtonStyle">지원하기</button>
                </Link>
            </div>
        </div>
    )
}

export default FirstImg
