import React from "react";
import { ArticleListPreView, BoardLink, CommentLink, CompanyName, ContentLink, Detail, Image, ImageLink, ImageWrap, LikeLink, ScrapeLink, SubWrap, TimeLink, Title, TitleWrap, ViewLink } from "styles/board/BoardItem.style";
import { InfoFnc, StyledLink, WrapInfo } from 'styles/Global.style';

const BoardItem = (props) => {
    const title = props.item.title;
    const detail = props.item.detail;
    const image = props.item.image;
    const id = props.item.id;

    return (
        <ArticleListPreView>
            <TitleWrap image={image ? true : false}>
                <Title image={image ? true : false}>
                    <BoardLink to={`/post/${id}`}>{title}</BoardLink>
                </Title>
                <Detail>
                    <ContentLink to={`/post/${id}`}>{detail}</ContentLink>
                </Detail>
                <ImageWrap>
                    <ImageLink to={`/post/${id}`}>
                        <Image />
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
                    <InfoFnc>
                        <TimeLink to="/">40분</TimeLink>
                        <ScrapeLink to="/" />
                    </InfoFnc>
                </WrapInfo>
            </SubWrap>
        </ArticleListPreView >
    )
}

export default BoardItem;