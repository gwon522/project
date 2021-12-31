import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { StyledLink, WrapInfo } from './Global.style';


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
export const DetailLink = styled(Link)`
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

export const Article = styled.div`
    display: block;
    color: #222;
    font-size: 14px;
    word-wrap: break-word;
    line-height: 1.25em;
    position: relative;
    padding: 12px 0;
    border-bottom:1px solid #f5f5f5;

    @media screen and (min-width : 1100px){
        padding: 0;
        border-bottom: none;

        &:first-of-type{
            padding-top: 9px;
        }
    }
`
export const TopicLink = styled(StyledLink)`
    display: inline-block;
    max-width: calc(100% - 55px);
    line-height: 20px;
    vertical-align: middle;
    @media screen and (min-width: 1100px){
        display: inline-block;
        font-size: 14px;
        line-height: 30px;
    }
`
export const ArticleBest = styled(Article)`
    padding: 11px 0;

    @media screen and (min-width : 1100px){
        display: flex;
        margin-top: 2px;
        padding: 0 120px 0 0;

        &:first-of-type{
            padding-top: 11px;
        }
    }
`
export const ArticleTag = styled.span`
    display: none;

    ${StyledLink}{
        color: #94969b;
        cursor: pointer;
        text-decoration: none;
        
        @media screen and (min-width : 1100px){
            display: inline-block;
            padding:0 6px 0 7px;
        }
    }
`
const img = css`
    background: url('https://d2u3dcdbebyaiu.cloudfront.net/img/www_kr/sp-kr.png') no-repeat;
    background-size: 600px 900px;
    background-position: -166px -600px;
`
const link = css`
    background: url('https://d2u3dcdbebyaiu.cloudfront.net/img/www_kr/sp-kr.png') no-repeat;
    background-size: 600px 900px;
    background-position: -114px -600px;
`
const none = css`
    background: none;
`
export const ArticleBestTag = styled(ArticleTag)`
    display: block;
    font-size: 12px;

    @media screen and (min-width : 1100px){
        display:block;
        height:20px;
        margin: 5px 4px 0 0;
        border : 1px solid #eee;
        vertical-align: middle;
        line-height: 18px;
        box-sizing: border-box;
        white-space: nowrap;
    }
`
export const ArticleTitle = styled(StyledLink)`
    display: inline-block;
    font-size: 14px;
    line-height: 30px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    &::before{
        display : inline-block;
        width:16px;
        height:16px;
        margin : 3px 3px 0 0;
        vertical-align: top;

        @media screen and (min-width : 1100px){
            margin-top: 8px;
        }
        ${(props) => props.etc === "img" ? { img } : props.etc === "link" ? { link } : none}
    }
`

export const NormalInfoWrap = styled(WrapInfo)`
    display: inline-block;
    position: absolute;
    top: calc(50% + 2px);
    right: 0;
    transform: translateY(-50%);
    margin-top: 0;

    @media screen and (min-width : 1100px){
        margin-top: -1px;
        &:first-of-type{
                margin-top: 3px;
        }
    }
    /* ${StyledLink}{
        &:only-of-type{
            margin: 0;
        }
        @media screen and (min-width : 1100px){
            margin-right: 0 0 0 11px;
        }
    } */
`
export const FuncLink = styled(StyledLink)`
    display: inline-block;
    width: 48px;
    white-space: nowrap;
    vertical-align: top;
    &:only-of-type{
            margin: 0;
    }
    @media screen and (min-width : 1100px){
        margin: 0 0 0 11px;
    }

    &::before{
        background: url('https://d2u3dcdbebyaiu.cloudfront.net/img/www_kr/sp-kr.png') no-repeat;
        background-size: 600px 900px;
        background-position: ${props => props.func === "like" ? '-62px -600px' : props.func === "cmt" ? '-36px -600px' : '-10px -600px'}
    }
`


export const BestInfoWrap = styled(NormalInfoWrap)`
    display: block;
    margin-left: 0;
    position: relative;
    top: auto;
    transform: translateY(0);
    margin-top: 8px;

    @media screen and (min-width : 1100px){
        position: absolute;
        display: inline-block;
    }
    ${StyledLink}{
        @media screen and (min-width : 1100px){
            font-size: 12px;
            margin-right: 0;
        }
    }
`
export const HideI = styled.i`
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    width: 1px;
    height: 1px;
    font-size: 1px;
    line-height: 100px;
    white-space: nowrap;
`
export const styleds = {
    faIcon: {
        position: 'absolute',
        top: '50%',
        left: '0',
        transform: 'translateY(-50%)',
        display: 'inline-block',
        width: '32px',
        height: '32px'
    }
}