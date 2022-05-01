import { CompositionDataItem } from '~/types/resas'

export const convertCompositionToSeries = (
  composition: CompositionDataItem
) => {
  const series: number[][] = []
  // TODO: to think better way to convert
  for (const obj of composition.data) {
    series.push([obj.year, obj.value])
  }
  return series
}
