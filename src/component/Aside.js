import { AsideWrap } from "styles/Aside.style";
import { RankData } from "utils/TempData";
import { Banner } from "./Aside/Banner";
import { Chart } from "./Aside/Chart";
import { ChartItem } from "./Aside/ChartItem";

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