import React from "react";
import { ArticleListPreView, BoardLink, CommentLink, CompanyName, ContentLink, Detail, Image, ImageLink, ImageWrap, LikeLink, ScrapeLink, SubWrap, TimeLink, Title, TitleWrap, ViewLink } from "styles/board/BoardItem.style";
import { InfoFnc, StyledLink, WrapInfo } from 'styles/Global.style';
import calculateDate from "utils/dateCalc";

//게시판 목록의 item
const BoardItem = (props) => {
    const image = props.item.image;
    const { b_id, b_title, b_content, b_view, likes, u_company, comment, b_date } = props.item;

    return (
        <ArticleListPreView>
            <TitleWrap image={image ? true : false}>
                <Title image={image ? true : false}>
                    <BoardLink to={`/post/${b_id}`}>{b_title}</BoardLink>
                </Title>
                <Detail>
                    <ContentLink to={`/post/${b_id}`}>{b_content}</ContentLink>
                </Detail>
                {image && (
                    <ImageWrap>
                        <ImageLink to={`/post/${b_id}`}>
                            <Image />
                            <em>+1</em>
                        </ImageLink>
                    </ImageWrap>
                )}

            </TitleWrap>
            <SubWrap>
                <CompanyName>
                    <StyledLink to={`/post/${b_id}`}>{u_company}</StyledLink>
                </CompanyName>
                <WrapInfo>
                    <ViewLink to={`/post/${b_id}`}>{b_view}</ViewLink>
                    <LikeLink to={`/post/${b_id}`}>{likes}</LikeLink>
                    <CommentLink to={`/post/${b_id}`}>{comment}</CommentLink>
                    <InfoFnc>
                        <TimeLink to="/">{calculateDate(b_date)}</TimeLink>
                        <ScrapeLink to="/" />
                    </InfoFnc>
                </WrapInfo>
            </SubWrap>
        </ArticleListPreView >
    )
}

export default BoardItem;