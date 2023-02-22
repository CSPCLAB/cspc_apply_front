import React from 'react'
import './Doc_result_pass.css';
import imgMap from '../img/map.png'
import imgSpot from '../img/map-marker-Filled.png'


const Doc_result_pass = () =>{
    return(
        <div className='black'>
            <div className='pass__resultbox'>
                <div className='pass__resultlen'>서류결과</div>
            </div>
            <div className='pass__line'></div>
            <div className='pass__resultbox2'>
                <div className='pass__resultlen1'>김피씨 님 축하드립니다!</div>
                <div className='pass__resultlen2'>서류에 합격하셨습니다.<br/>
                    함께 하기까지 한 단계, 면접 전형이 남아 있습니다.<br/>
                    전형 진행을 위해 면접 일정 및 장소를 안내드립니다.<br/>
                </div>
                <div className='pass__resultlen3'>면접 안내</div>
                <div className='pass__resultlen4'>면접 시간은 <b>3월 14일 월요일 오후 14시 30분</b>입니다.<br/>
                    면접 시간에 맞춰 <b>리치과학관 914호</b>로 와주세요.<br/>
                    문의사항이 있으시다면 아래 이메일로 문의해주세요.<br />
                </div>
                <div className='pass__picline'>
                    <img src={imgMap} /> 
                    <div className='pass__picline_spot'>
                        <img src={imgSpot} />
                        </div>
                        </div>
            </div>
                        
        </div>
        
    )
}

export default Doc_result_pass;