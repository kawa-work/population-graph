type Message = String | null

interface ResasResponse<T> {
  message: Message
  result: T
}

interface Prefecture {
  prefCode: Number
  prefName: String
}

type Prefectures = Prefecture[]

export type PrefecturesResponse = ResasResponse<Prefectures>

interface CompositionDataItem {
  label: String
  data: Array<{
    year: Number
    value: Number
    rate?: Number
  }>
}
interface Composition {
  boundaryYear: Number
  data: CompositionDataItem[]
}

export type CompositionResponse = ResasResponse<Composition>
