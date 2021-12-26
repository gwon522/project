import styled from "styled-components"
import { Link } from 'react-router-dom';

export const Aside = () => {
    const AsideWrap = styled.aside`
        margin-left: 64px;
        flex-direction: column;
    `
    const AsideChart = styled.div`
        padding : 15px 15px;
    `
    const RankTitle = styled.h1`
        font-weight: 700;
        font-size: 20px;
        margin : 0;
        padding-left : 10px;
        padding-bottom : 8px;
    `
    const UpIcon = styled.span`
        
    `
    const DownIcon = styled.span`
        
    `
    return (
        <AsideWrap>
            <div> 광고 이미지 자리 </div>
            <AsideChart>
                <RankTitle>실시간 인기</RankTitle>
                <p>
                    <em>1</em>
                    <Link to="/">실시간 인기 회사</Link>
                    <span>up</span>
                </p>
                <p>
                    <em>2</em>
                    <Link to="/">실시간 인기 회사</Link>
                    <span>up</span>
                </p>
                <p>
                    <em>3</em>
                    <Link to="/">실시간 인기 회사</Link>
                    <span>up</span>
                </p>

            </AsideChart>
        </AsideWrap>
    )
}