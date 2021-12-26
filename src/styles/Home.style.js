import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MainWrap = styled.div`
    display: flex;
    flex-direction: column;
    border-top: 1px solid #d4d4d4;
    max-width:1140px;
    box-sizing: border-box;
    margin:0 auto;

    @media screen and (min-width: 1100px){
        flex-direction: row;
        border-top: none;
        padding: 40px 20px 0;
    }
`
export const Main = styled.div`
    @media screen and (min-width: 1100px){
        width:736px;
        min-height : 800px;
    }
`
export const Title = styled.h2`
    margin:0;
    position: relative;
    border-bottom: 1px solid #eee;
    font-weight: 700;
    height: 54px;
    padding-right: 0;
    padding-left: 34px;
    line-height: 54px;

    @media screen and (min-width: 1100px){
        height: 45px;
        padding-right: 52px;
        padding-left: 35px;
        border-bottom-width: 2px;
        font-size: 18px;
        line-height: 43px;
    }
`
export const ArticleList = styled.div`
    display: flex;
    flex-wrap: wrap;
    border-top:8px solid #f2f2f3;

    @media screen and (min-width:1100px){
        border-top: none;
    }
`
export const TopicList = styled.div`
    position: relative;
    width:calc(100% - 40px);
    padding:0 20px;
    border-bottom:8px solid #f2f2f3;

    @media screen and (min-width:1100px){
        width:calc(50% - 20px);
        margin-top:45px;
        padding:0;
        border-bottom: none;

        &:nth-of-type(2n){
            margin-right:20px;
        }
        &:nth-of-type(odd){
            margin-left:20px;
        }
    }
`
export const TopicLink = styled(Link)`
    text-decoration: none;
    display: block;
    padding:14px 0;
    color:#94969b;
    font-size: 14px;
    text-align: center;

    &:after{
        background: url('https://d2u3dcdbebyaiu.cloudfront.net/img/www_kr/sp-kr.png') no-repeat;
        background-size: 600px 900px;
        background-position: -10px -626px;
        right: 0;
        width: 16px;
        height: 16px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        -webkit-transform: translateY(-50%);
    }  

    @media screen and (min-width:1100px){
        position: absolute;
        top: -2px;
        right: 0;
        padding-right: 16px;
        color: #222;
        font-size: 12px;
        &:after{
            content: "";
        }   
    }
 
`
export const Topic = styled(TopicList)`
    display: block;
`
export const BestTopic = styled(TopicList)`
    width: 100%;
    margin: 35px 0 0;
    @media screen and (min-width:1100px){
        &:nth-of-type(odd){
            margin-left:0px;
        }
    }
`