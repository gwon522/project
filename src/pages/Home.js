import BoardList from 'component/board/BoardList';
import React from 'react';
import styled from 'styled-components';


const HomeComponent = () => {

    const Section = styled.section`
        display: block;
        width: 100%;
    `;

    return (
        <BoardList></BoardList>
    );
}

export default HomeComponent;
