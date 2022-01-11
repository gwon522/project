import React from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
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
    const P = styled.p` 
        padding-right: 90px;
        margin-top: 4px;
    `
    return (
        <ArticleListPreView>
            <TitleWrap image={image ? true : false}>
                <Title image={image ? true : false}><BoardLink to={`board/${id}`}>{title}</BoardLink></Title>
                <P>{detail}</P>
                <span>{image}</span>
            </TitleWrap>
            <div>
                <p>직장</p>
                <div>
                    <a>조회</a>
                    <a>좋아요</a>
                    <a>댓글</a>
                    <div>
                        <a>시간</a>
                        <a>스크랩</a>
                    </div>
                </div>
            </div>
        </ArticleListPreView >
    )
}

export default BoardItem;