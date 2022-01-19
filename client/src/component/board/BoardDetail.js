
import { Aside } from "component";
import styled, { css } from "styled-components";
import { InfoFnc, StyledLink, WrapInfo } from "styles/Global.style";

const BoardDetailWrap = styled.div`
    display: flex;
    flex-direction: row;
    border-top: 1px solid #d4d4d4;
    max-width: 1140px;
    box-sizing: border-box;
    margin: 0 auto;

    @media screen and (min-width:1100px){
        flex-direction: row;
        border-top: none;
        padding: 40px 20px 0;
        padding-top: 32px;
    }
`
const Contents = styled.div`
    @media screen and (min-width: 1100px){
        width: 736px;
        min-height: 800px;
    }
`
const ArticleHead = styled.div`
    position: relative;
    z-index: 105;
    padding: 25px 20px 19px;
    
    @media screen and (min-width:1100px){
        z-index: 10;
        padding: 0 0 29px;   
    }

    h1{
        margin:0;
        padding:0;
        font-size: 12px;
        font-weight: 700;
        line-height: 16px;   
        @media screen and (min-width:1100px){
            font-size: 14px;
        }
    }
    h2{
        margin:0;
        padding:0;
        margin-top: 15px;
        font-size: 20px;
        font-weight: 700;
        line-height: 28px;

        @media screen and (min-width:1100px){
            font-size: 24px;
            line-height: 32px;
        }
    }
`
const TopicLink = styled(StyledLink)`
    &:before{
        background: url('https://d2u3dcdbebyaiu.cloudfront.net/img/www_kr/sp-kr.png') no-repeat;
        background-size: 600px 900px;
        background-position: -10px -626px;
        display: inline-block;
        width: 16px;
        height: 16px;
        margin: -2px 4px 0;
        vertical-align: middle;
        content: "";
    }
    @media screen and (min-width:1100px){
        &:before{
            margin: -4px 4px 0;
        }
    }
`
const Name = styled.p`
    margin-top: 16px;
    font-size: 12px;
    line-height: 16px;    

    @media screen and (min-width:1100px){
        font-size: 14px;
    }
`
const FuncSpan = styled.span`
    margin-right: 14px;
    color:#94969b;
    vertical-align: top;

    &:before{
        display: inline-block;
        width: 16px;
        height: 16px;
        margin: -1px 3px 1px 0;
        vertical-align: middle;
        content: "";
        background: url('https://d2u3dcdbebyaiu.cloudfront.net/img/www_kr/sp-kr.png') no-repeat;
        background-size: 600px 900px;
        background-position : ${props => {
        if (props.func === "time") {
            return '-88px -600px'
        } else if (props.func === "view") {
            return '-10px -600px'
        } else if (props.func === "cmt") {
            return '-36px -600px'
        } else {
            return '-114px -652px'
        }
    }} 
    }
`
const ArticleBody = styled.div`
    padding: 0 20px;
    border-top: 1px solid #eee;
    word-wrap: break-word;
    word-break: break-word;

    @media screen and (min-width:1100px){
        padding: 0;
    }
`
const Article = styled.p`
    margin:0;
    margin-top: 24px;
    line-height: 1.6em;
    font-size: 15px;

    @media screen and (min-width:1100px){
        margin-top: 30px;
        line-height: 1.75em;
        font-size: 16px;
    }
`
const ArticleInfo = styled.div`
    position: relative;
    margin-top: 30px;
    padding: 26px 0;
    border-top: 1px solid #eee;

    @media screen and (min-width:1100px){
        margin-top: 43px;
        padding: 0;
        border-top: 0;   
    }
`
const LikeLink = styled(StyledLink)`
    position: relative;
    margin-right: 17px;
    padding-left: 24px;
    font-size: 14px;
    line-height: 20px;
    vertical-align: top;

    &:before{
        background: url('https://d2u3dcdbebyaiu.cloudfront.net/img/www_kr/sp-kr.png') no-repeat;
        background-size: 504px 756px;
        background-position: -109.2px -406.56px;
        position: absolute;
        top: 50%;
        left: 0;
        display: block;
        width: 16px;
        height: 16px;
        margin-top: -9px;
        content: "";
        
        @media screen and (min-width:1100px){
            background-size: 600px 900px;
            background-position: -130px -484px;
            width: 20px;
            height: 20px;
            margin-top: -11px;
            content: "";
        }
    }

    @media screen and (min-width:1100px){
        margin-right: 14px;
        padding-left: 24px;
        font-size: 16px;
    }
`

const CommentLink = styled(StyledLink)`
    position: relative;
    margin-right: 17px;
    padding-left: 24px;
    font-size: 14px;
    line-height: 20px;
    vertical-align: top;

    &:before{
        background: url('https://d2u3dcdbebyaiu.cloudfront.net/img/www_kr/sp-kr.png') no-repeat;
        background-size: 504px 756px;
        background-position: -58.8px -406.56px;
        position: absolute;
        top: 50%;
        left: 0;
        display: block;
        width: 16px;
        height: 16px;
        margin-top: -9px;
        content: "";
        
        @media screen and (min-width:1100px){
            background-size: 600px 900px;
            background-position: -70px -484px;
            width: 20px;
            height: 20px;
            margin-top: -11px;
            content: "";
        }
    }

    @media screen and (min-width:1100px){
        margin-right: 14px;
        padding-left: 24px;
        font-size: 16px;
    }
`
const ArticleComment = styled.div`
    margin: 0 0 -1px;
    padding: 23px 0 24px;
    border-top: 1px solid #eee;

    @media screen and (min-width:1100px){
        margin-top: 40px;
        padding: 26px 0 0;
    }

    h3{
        margin:0;
        padding: 0 20px;
        font-size: 14px;
        font-weight: 700;

        @media screen and (min-width:1100px){
            padding: 0;
            font-size: 16px;
        }
    }
`
const BoardDetail = () => {

    return (
        <BoardDetailWrap>
            <Contents>
                <ArticleHead>
                    <h1>
                        <StyledLink to="/topic/all">토픽</StyledLink>
                        <TopicLink to="/topic/블라블라">블라블라</TopicLink>
                    </h1>
                    <h2>
                        제목부분
                    </h2>
                    <Name>
                        <StyledLink style={{ color: "#37acc9" }}>직장명</StyledLink> 부서명
                    </Name>
                    <WrapInfo func="detail">
                        <FuncSpan func="time">시간</FuncSpan>
                        <FuncSpan func="view">뷰</FuncSpan>
                        <FuncSpan func="cmt">코멘트</FuncSpan>
                        <InfoFnc func="detail">
                            <FuncSpan func="bookMark" />
                        </InfoFnc>
                    </WrapInfo>
                </ArticleHead>
                <ArticleBody>
                    <Article>글을 여기다 작성</Article>
                    <ArticleInfo>
                        <LikeLink>좋아요</LikeLink>
                        <CommentLink>코멘트</CommentLink>
                    </ArticleInfo>
                </ArticleBody>
                <ArticleComment>
                    <h3>댓글 cnt</h3>
                    <div>
                        <div></div>
                    </div>
                </ArticleComment>
            </Contents>
            <Aside />
        </BoardDetailWrap>
    )

}


export default BoardDetail;