import { ResponsiveLine } from '@nivo/line'

const Chart = ({data, trigger}) => (

<ResponsiveLine
        data={data}
        margin={{ top: 10, right: 110, bottom: 100, left: 80 }}
        xScale={{ type: 'point' }}
        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: trigger, reverse: false }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            // anchor: 'bottom-left',
            orient: 'bottom-left',
            tickSize: 2,
            tickPadding: 5,
            tickRotation: 45,
            legend: 'week',
            legendOffset: 50,
            legendPosition: 'middle'
        }}
        axisLeft={{
            orient: 'left',
            tickSize: 2,
            tickPadding: 0,
            tickRotation: 0,
            legend: 'count',
            legendOffset: -60,
            legendPosition: 'middle'
        }}
        curve={'monotoneX'}
        colors={{ scheme: 'category10' }}
        pointSize={4}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />


)

export default Chart