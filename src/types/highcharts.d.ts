export interface Title {
  text: string
}

export type SeriesItemData = number[][]

export interface SeriesItem {
  name: string
  data: SeriesItemData
}

export type Series = SeriesItem[]

export interface ChartOptions {
  title: Title
  xAxis: {
    title: Title
  }
  yAxis: {
    title: Title
  }
  series: Series
}
