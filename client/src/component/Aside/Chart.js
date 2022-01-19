
import { AsideChart, RankSummary, RankTitle, RankWrap } from 'styles/Aside.style';

export const Chart = ({ children }) => {
    return (
        <AsideChart>
            <RankTitle>실시간 인기</RankTitle>
            <RankWrap>
                {children}
            </RankWrap>
            <RankSummary>블라인드에서 실시간으로 많이 검색된 회사 순위</RankSummary>
        </AsideChart>
    )
}