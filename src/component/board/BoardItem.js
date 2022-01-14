import React from "react";
import styled from 'styled-components';
import { StyledLink } from 'styles/Global.style';

const BoardItem = (props) => {
    const title = props.item.title;
    const detail = props.item.detail;
    const image = props.item.image;
    const id = props.item.id;

    const ArticleListPreView = styled.div`
        position: relative;
        width: 100%;
        margin: 0 20px;
        padding: 24px 0;
        border-bottom: 1px solid #eee;

        @media screen and (min-width:1100px){
            width: 50%;
            margin: 0;
            box-sizing: border-box;
            padding-top: 39px;
            padding-bottom: 79px;
            &:nth-child(2n){
                padding-left: 20px;
            }
            &:nth-child(odd){
                width: 50%;
                padding-right: 20px;
                border-right: 1px solid #eee;
            }
        }
    `;
    const TitleWrap = styled.div`
        position:relative;
        min-height:${(props) => props.image && '80px'};
    `
    const Title = styled.h3`
        margin:0;
        margin-top: 2px;
        padding-right: ${(props) => props.image && '90px'};
        @media screen and (min-width:1100px){
            margin-top: 0;
            padding-right: ${(props) => props.image && '105px'};
        }
    `
    const BoardLink = styled(StyledLink)`
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        word-wrap: break-word;
        box-sizing: border-box;
        max-height: 40px;
        font-weight: 700;
        line-height: 1.25em;
        word-break: break-word;

        @media screen and (min-width:1100px){
            height: 52px;
            max-height: 52px;
            margin-top: 1px;
            font-size: 18px;
            line-height: 1.4em;
            
        }
    `
    const Detail = styled.p` 
        margin: 0;
        padding:0;
        padding-right: 90px;
        margin-top: 8px;

        @media screen and (min-width:1100px){
            margin-top: 4px;
            padding-right: 105px;
        }
    `
    const ContentLink = styled(StyledLink)`
        display: -webkit-box;
        overflow: hidden;
        line-height: 1.33em;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        word-wrap: break-word;
        box-sizing: border-box;
        max-height: 40px;
        font-size: 14px;
        line-height: 1.43em;
        word-break: break-word; 

        @media screen and (min-width:1100px){
            height: 43px;
            max-height: 43px;
            margin-top: 4px;
            font-size: 14px;
            line-height: 1.5em;
        }
    `
    const ImageWrap = styled.span`
        margin-top: 0;
        position: absolute;
        top: 0;
        right: 0;
        overflow: hidden;
        display: block;
        width: 80px;
        height: 80px;
        background-color: #e7e7e7;

        @media screen and (min-width:1100px){
            top: 0;
            max-width: 364px;
        }
    `
    const Image = styled.img`
        border: 0;
        vertical-align: top;
        position: absolute;
        top: 0;
        left: 0;
        overflow: hidden;
        width: 100%;
        height: 100%;
        object-fit: cover;
    `
    const ImageLink = styled(StyledLink)`
        em{
            background: rgba(0,0,0,.5);
            color: #fff;
            font-size: 24px;
            text-align: center;
            line-height: 80px;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            font-style: normal;
        }
    `
    const CompanyName = styled.p`
        margin:0;
        padding:0;
        word-wrap: break-word;
        margin-top: 16px;
        font-size: 12px;
        line-height: 16px;
        font-family: "Roboto";
        @media screen and (min-width:1100px){
            font-size: 12px;
        }
    `
    const SubWrap = styled.div`
        display: block;
        margin: 0;
        padding:0;
        @media screen and (min-width: 1100px){
            position: absolute;
            bottom: 24px;
            width: 100%;
            min-height: 40px;
            padding-right: 20px;
            box-sizing: border-box;
        }
    `
    const WrapInfo = styled.div`
        position: relative;
        margin-top: 8px;
        font-size: 12px;
    `
    const CommonLink = styled(StyledLink)`
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
        }
    `

    const ViewLink = styled(CommonLink)`
        &:before{
            background: url('https://d2u3dcdbebyaiu.cloudfront.net/img/www_kr/sp-kr.png') no-repeat;
            background-size: 600px 900px;
            background-position: -10px -600px;
        }
    `
    const LikeLink = styled(CommonLink)`
        position: relative;
        z-index: 1;
        &:before{
            background: url('https://d2u3dcdbebyaiu.cloudfront.net/img/www_kr/sp-kr.png') no-repeat;
            background-size: 600px 900px;
            background-position: -62px -600px;
        }
    `
    const CommentLink = styled(CommonLink)`
        &:before{
            background: url('https://d2u3dcdbebyaiu.cloudfront.net/img/www_kr/sp-kr.png') no-repeat;
            background-size: 600px 900px;
            background-position: -36px -600px;
        }
    `

    const InfoWrap = styled.div`
        position: absolute;
        margin:0;
        padding:0;
        top: 0;
        right: 0;
        font-size: 14px;
    `
    const TimeLink = styled(CommonLink)`
        font-size: 12px;
        margin: 0 2px 0 0;
    `
    const ScrapeLink = styled(CommonLink)`
        margin: 1px 0 0;
        /* display: inline-block; */
        width: 20px;
        height: 20px;
        padding: 2px;
        box-sizing: border-box;
        &:before{
            background: url('https://d2u3dcdbebyaiu.cloudfront.net/img/www_kr/sp-kr.png') no-repeat;
            background-size: 600px 900px;
            background-position: -88px -652px;
            vertical-align: top;
        }
    `
    return (
        <ArticleListPreView>
            <TitleWrap image={image ? true : false}>
                <Title image={image ? true : false}><BoardLink to={`/post/${id}`}>{title}</BoardLink></Title>
                <Detail>
                    <ContentLink to={`/post/${id}`}>{detail}</ContentLink>
                </Detail>
                <ImageWrap>
                    <ImageLink to={`/post/${id}`}>
                        <Image to={`/post/${id}`} />
                        <em>+1</em>
                    </ImageLink>
                </ImageWrap>
            </TitleWrap>
            <SubWrap>
                <CompanyName>
                    <StyledLink to={`/post/${id}`}>직장</StyledLink>
                </CompanyName>
                <WrapInfo>
                    <ViewLink to={`/post/${id}`}>22</ViewLink>
                    <LikeLink to={`/post/${id}`}>22</LikeLink>
                    <CommentLink to={`/post/${id}`}>22</CommentLink>
                    <InfoWrap>
                        <TimeLink>40분</TimeLink>
                        <ScrapeLink />
                    </InfoWrap>
                </WrapInfo>
            </SubWrap>
        </ArticleListPreView >
    )
}

export default BoardItem;