import React, { useEffect, useState } from 'react'

import img_1 from '../../../../assets/images/main/main_img_1.png'

import GoToApply from '../../../../components/GoToApply'
import { Link } from 'react-router-dom'
import '../styles/ImgMain.css'
import { get_recruit_info } from 'apis/get_recruit'

const FirstImg = () => {
    const [recruitTitle, setRecruitTitle] = useState('') // 상태로 제목을 관리합니다.

    useEffect(() => {
        // 컴포넌트가 마운트될 때 API를 호출합니다.
        const fetchData = async () => {
            try {
                const data = await get_recruit_info() // API 호출
                const termString =
                    data.term === 'spring'
                        ? '1학기'
                        : data.term === 'fall'
                        ? '2학기'
                        : ''
                // 완성된 문자열을 상태에 설정
                setRecruitTitle(`${data.year} ${termString} 신입 부원 모집`)
            } catch (error) {
                console.error('API 호출 중 오류 발생:', error)
            }
        }

        fetchData()
    }, []) // 빈 배열을 의존성 배열로 제공하여 컴포넌트가 마운트될 때만 실행되도록 합니다.
    return (
        <div className="ImgMainBox">
            <img src={img_1} className="ImgMainStyle" />
            <div className="ImgMainLetterBox_1 WhiteWord ImgMain_1_Title">
                {recruitTitle}
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
