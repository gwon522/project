import React from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const BoardItem = (props) => {
    const title = props.item.title;
    const detail = props.item.detail;
    const image = props.item.image;
    const id = props.item.id;

    const ArticleListPreView = styled.div`
        position: relative;
        width: 50%;
        margin: 0;
        box-sizing: border-box;
        padding-top: 39px;
        padding-bottom: 79px;
    `;

    const H3 = styled.h3`
        margin:0;
        overflow:hidden;
        white-space:nowrap;
        padding-right: 90px;
        text-overflow:ellipsis;
    `
    const P = styled.p` 
        padding-right: 90px;
        margin-top: 4px;
    `
    return (
        <ArticleListPreView>
            <H3><Link to={`board/${id}`}>{title}</Link></H3>
            <P>{detail}</P>
            <span>{image}</span>
        </ArticleListPreView >
    )
}

export default BoardItem;