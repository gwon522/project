import { Link } from "react-router-dom";
import styled from "styled-components";

export const AsideWrap = styled.aside`
display: block;
@media screen and (min-width:1100px){
    width:300px;
    margin-left: 64px;
}
`
export const AsideChart = styled.div`
width:100%;
padding : 17px 20px 16px;
box-sizing:border-box;

@media screen and (min-width:1100px){
    margin-bottom: 24px;
    padding: 22px 21px 14px;
    background-color: #f8f8f8;
}
`
export const RankTitle = styled.h1`
margin : 0;
padding-bottom: 11px;
font-weight: 700;

@media screen and (min-width:1100px){
    padding-bottom: 8px;
    padding-left: 10px;
    font-size: 15px;
}
`
export const RankWrap = styled.div`
-moz-column-count: 2;
column-count: 2;
-webkit-column-gap: 10px;
-moz-column-gap: 10px;
grid-column-gap: 10px;
column-gap: 10px;

@media screen and (min-width: 1100px){
    -moz-column-count: 1;
    column-count: 1;
    -webkit-column-gap: 0;
    -moz-column-gap: 0;
    grid-column-gap: 0;
    column-gap: 0;
}
`
export const Rank = styled.p`
margin: 0;
position: relative;
display: inline-block;
width: 49%;
padding: 6px 0 9px;
font-size: 14px;
line-height: 20px;

@media screen and (min-width:1100px){
    width:100%;
    padding:5px 3px;
    box-sizing: border-box;
}

em{
    display: inline-block;
    width:20px;
    margin-right: 10px;
    font-weight: 700;
    color: #94969b;
    text-align: center;
    line-height: 20px;
    vertical-align: middle;
    font-style: normal;
}

span{
    background: url(${props => props.rank === 'up' ? 'https://d2u3dcdbebyaiu.cloudfront.net/img/www_kr/sp-kr.png' : props.rank === 'fixed' ? 'https://d2u3dcdbebyaiu.cloudfront.net/img/www_kr/sp-kr.png' : 'https://d2u3dcdbebyaiu.cloudfront.net/img/www_kr/sp-kr.png'}) no-repeat;
    background-size: 600px 900px;
    background-position: ${props => (props.rank === 'up' ? "-270px -600px" : props.rank === 'fixed' ? "-296px -600px" : "-322px -600px")};
    position: absolute;
    top: calc(50% - 8px);
    right: 0;
    display: inline-block;
    width: 16px;
    height: 16px;
    margin: 1px 4px 0 0;
    vertical-align: middle;
    text-indent: -9999px;
}
`;
export const RankLink = styled(Link)`
display: inline-block;
line-height: 18px;
vertical-align: middle;
text-decoration: none;
color: #222;
cursor: pointer;
`
export const RankSummary = styled.p`
&::before{
    background: url('https://d2u3dcdbebyaiu.cloudfront.net/img/www_kr/sp-kr.png') no-repeat;
    background-size: 600px 900px;
    background-position: -218px -600px;
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-right: 4px;
    vertical-align: top;
    content: "";
}
margin: 0;
margin-top: 4px;
padding: 9px 0 8px;
color: #94969b;
font-size: 12px;
letter-spacing: -.5px;

@media screen and (min-width: 1100px){
    text-align: center;
}
`
export const AdBanner = styled.div`
overflow: hidden;
display: block;
margin: 0 -20px;
@media screen and (min-width : 1100px){
    width: 300px;
    margin: 0 0 24px;
}

`
export const BannerImage = styled.p`
background-color: #d5f3ff;
background-image: url('https://d2u3dcdbebyaiu.cloudfront.net/img/www_kr/bg_blboard.png');
background-repeat: no-repeat;
background-position: 50% 100%;
background-size: 300px 80px;
font-size: 15px;
font-weight: 700;
line-height: 1.48em;
text-align: center;
margin: 0;
@media screen and (min-width: 1100px){
    background-size: 300px 70px;
}
`
export const BannerLink = styled(Link)`
text-decoration: none;
display: block;
padding: 20px 30px 16px;
color:#222;

@media screen and (min-width: 1100px){
    padding: 16px 24px 14px;
}
`
export const BannerSpan = styled.span`
display: inline-block;
width: 100%;
max-width: 315px;
text-align: left;

em{
    color: #00b2ff;
    font-style: normal;
}
`