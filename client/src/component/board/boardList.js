
import React from "react";
import BoardItem from "./BoardItem";
import BoardTempData from "./BoardTempData";

const BoardList = () => {
    const item = BoardTempData;

    return (
        <>
            {item.map((item) => {
                return <BoardItem key={item.id} item={item} />
            })}
        </>
    )
}

export default BoardList;