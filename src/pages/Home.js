import React from 'react';
import styled from 'styled-components';


function HomeComponent() {

    const Section = styled.section`
        display: block;
        width: 100%;
    `;

    const ArticleList = styled.div`
        display: flex;
        flex-wrap: wrap;
        overflow: hidden;

    `;
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
        <ArticleList>
            <ArticleListPreView>
                <H3><a href="/">ㅇㄴㄹㅁㄴㅇㄹㄴㅇㅇㄴㄹㅁㄴㅇㄹㄴㅇㅇㄴㄹㅁㄴㅇㄹㄴㅇㅇㄴㄹㅁㄴㅇㄹㄴㅇㅇㄴㄹㅁㄴㅇㄹㄴㅇㅇㄴㄹㅁㄴㅇㄹㄴㅇㅇㄴㄹㅁㄴㅇㄹㄴㅇㅇㄴㄹㅁㄴㅇㄹㄴㅇㅇㄴㄹㅁㄴㅇㄹㄴㅇㅇㄴㄹㅁㄴㅇㄹㄴㅇㅇㄴㄹㅁㄴㅇㄹㄴㅇ</a></H3>
                <P>ddd</P>
                <span>image</span>
            </ArticleListPreView>
            <ArticleListPreView>
                <h3>gg2</h3>
                <p>ddd2</p>
                <span>image2</span>
            </ArticleListPreView>
            <ArticleListPreView>
                <h3>gg3</h3>
                <p>ddd3</p>
                <span>image3</span>
            </ArticleListPreView>
        </ArticleList>
    );
}

export default HomeComponent;
