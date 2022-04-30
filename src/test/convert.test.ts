import { CompositionDataItem } from '~/types/resas'
import { convertCompositionToSeries } from '~/utils/convert'

describe('convertCompositionToSeries', () => {
  it('Convert RESAS composition data to HighCharts series', () => {
    const compositionTest: CompositionDataItem = {
      label: 'Test',
      data: [
        {
          year: 1980,
          value: 12817,
        },
        {
          year: 1985,
          value: 12707,
        },
      ],
    }
    const seriesTest = [
      [1980, 12817],
      [1985, 12707],
    ]
    const series = convertCompositionToSeries(compositionTest)
    expect(series).toEqual(seriesTest)
  })
})
