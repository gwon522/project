import { AsideWrap } from "styles/Aside.style";
import { RankData } from "utils/TempData";
import { Banner } from "./Banner";
import { Chart } from "./Chart";
import { ChartItem } from "./ChartItem";

export const Aside = () => {

    return (
        <AsideWrap>
            <Banner />
            <Chart>
                {RankData.map(data => <ChartItem key={data.seq} data={data} />)}
            </Chart>
        </AsideWrap >
    )
}