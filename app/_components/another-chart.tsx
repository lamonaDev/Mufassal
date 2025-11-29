import React from "react";
import ReactApexChart from "react-apexcharts";

interface SeriesData {
    data: number[];
}

interface ChartOptions {
    chart: {
        id: string;
        group: string;
        type: "line" | "area" | "bar" | "pie" | "donut" | "radialBar" | "scatter" | "bubble" | "heatmap" | "candlestick" | "boxPlot" | "radar" | "polarArea" | "rangeBar" | "rangeArea" | "treemap";
        height: number;
        width?: number;
    };
    colors: string[];
}

interface ApexChartState {
    series: SeriesData[];
    options: ChartOptions;
    seriesLine2: SeriesData[];
    optionsLine2: ChartOptions;
    seriesArea: SeriesData[];
    optionsArea: ChartOptions;
    seriesSmall: SeriesData[];
    optionsSmall: ChartOptions;
    seriesSmall2: SeriesData[];
    optionsSmall2: ChartOptions;
}

interface GenerateDayWiseTimeSeriesParams {
    min: number;
    max: number;
}

// Implement the generateDayWiseTimeSeries function
const generateDayWiseTimeSeries = (baseval: number, count: number, { min, max }: GenerateDayWiseTimeSeriesParams): number[] => {
    const series: number[] = [];
    let x = baseval;
    for (let i = 0; i < count; i++) {
        const y = Math.floor(Math.random() * (max - min + 1)) + min;
        series.push(y);
        x += 86400000; // Add one day in milliseconds
    }
    return series;
};

const AnotherChartToTest: React.FC = () => {
    const [state, setState] = React.useState<ApexChartState>({
        series: [{
            data: generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 20, {
                min: 10,
                max: 60
            })
        }],
        options: {
            chart: {
                id: 'fb',
                group: 'social',
                type: 'line',
                height: 160
            },
            colors: ['#008FFB']
        },
        seriesLine2: [{
            data: generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 20, {
                min: 10,
                max: 30
            })
        }],
        optionsLine2: {
            chart: {
                id: 'tw',
                group: 'social',
                type: 'line',
                height: 160
            },
            colors: ['#546E7A']
        },
        seriesArea: [{
            data: generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 20, {
                min: 10,
                max: 60
            })
        }],
        optionsArea: {
            chart: {
                id: 'yt',
                group: 'social',
                type: 'area',
                height: 160
            },
            colors: ['#00E396']
        },
        seriesSmall: [{
            data: generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 20, {
                min: 10,
                max: 60
            })
        }],
        optionsSmall: {
            chart: {
                id: 'ig',
                group: 'social',
                type: 'area',
                height: 160,
                width: 300
            },
            colors: ['#008FFB']
        },
        seriesSmall2: [{
            data: generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 20, {
                min: 10,
                max: 60
            })
        }],
        optionsSmall2: {
            chart: {
                id: 'li',
                group: 'social',
                type: 'area',
                height: 160,
                width: 300
            },
            colors: ['#546E7A']
        },
    });

    return (
        <div className="w-200">
            <div id="wrapper">
                <div id="chart-line">
                    <ReactApexChart options={state.options} series={state.series} type="line" height={160} />
                </div>
                <div id="chart-line2">
                    <ReactApexChart options={state.optionsLine2} series={state.seriesLine2} type="line" height={160} />
                </div>
                <div id="chart-area">
                    <ReactApexChart options={state.optionsArea} series={state.seriesArea} type="area" height={160} />
                </div>
                <div className="columns">
                    <div id="chart-small">
                        <ReactApexChart options={state.optionsSmall} series={state.seriesSmall} type="area" height={160} />
                    </div>
                    <div id="chart-small2">
                        <ReactApexChart options={state.optionsSmall2} series={state.seriesSmall2} type="area" height={160} />
                    </div>
                </div>
            </div>
            <div id="html-dist"></div>
        </div>
    );
}

export default AnotherChartToTest;
