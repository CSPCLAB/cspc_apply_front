import React from 'react'

import GoToApply from '../../../../components/GoToApply'

import '../styles/ImgMain.css'
import { Link } from 'react-router-dom'
import img_3 from '../../../../assets/images/main/main_img_3.png'
import { Row, Col } from 'react-bootstrap'
const ThirdImg = () => {
    return (
        <div className="ImgMainBox">
            <img src={img_3} className="ImgMainStyle" />
            <div className="ImgMainGrayFilterStyle">
                <Row className="ImgMainLetterBox_3">
                    <Col className="ImgMainLetterBox_3_1">
                        <div className="WhiteWord ImgMain_3_Title">
                            랩실관리
                        </div>
                        <div className="mt-2 WhiteWord ImgMain_3_Content">
                            리치과학관 914호를 관리합니다.
                        </div>
                    </Col>
                    <Col className="ImgMainLetterBox_3_1">
                        <div className="WhiteWord ImgMain_3_Title">
                            스터디/프로젝트
                        </div>
                        <div className="WhiteWord ImgMain_3_Content">
                            함께 배우고 싶은 것 무엇이든 응원합니다.
                        </div>
                    </Col>
                    <Col className="ImgMainLetterBox_3_1">
                        <div className="WhiteWord ImgMain_3_Title">
                            선배 찬스
                        </div>
                        <div className="mt-2 WhiteWord ImgMain_3_Content">
                            언제든 물어볼 수 있는 선배가 있어 든든합니다.
                        </div>
                    </Col>
                </Row>
            </div>
            <div
                className="GoToApplyStyle"
                style={{ justifyContent: 'center', bottom: '80px' }}
            >
                <Link to="/login">
                    <button className="GoToButtonStyle">지원하기</button>
                </Link>
            </div>
        </div>
    )
}

export default ThirdImg
