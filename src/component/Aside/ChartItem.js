import { Rank, RankLink } from "styles/Aside.style"

export const ChartItem = (props) => {
    const data = props.data;
    return (
        <Rank rank={data.rank}>
            <em>{data.seq}</em>
            <RankLink to={`/rank/${data.seq}`}>{data.name}</RankLink>
            <span>up</span>
        </Rank>
    )
}