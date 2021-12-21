import React from "react";

const NotFound = (props) => {

    const routeBackHandler = () => {
        props.history.goBack();
    }
    console.log(props)
    return (
        <div>
            <h1>존재하지 않는 페이지 입니다.</h1>
            <button onClick={routeBackHandler}>이전화면으로 돌아가기</button>
        </div>
    );
}

export default NotFound; 