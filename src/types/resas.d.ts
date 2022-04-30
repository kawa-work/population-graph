type Message = String | null

interface ResasResponse<T> {
  message: Message
  result: T
}

interface Prefecture {
  prefCode: Number
  prefName: String
}

export type Prefectures = Prefecture[]

export type PrefecturesResponse = ResasResponse<Prefectures>

export interface CompositionDataItem {
  label: String
  data: Array<{
    year: Number
    value: Number
    rate?: Number
  }>
}
export interface Composition {
  boundaryYear: Number
  data: CompositionDataItem[]
}

export type CompositionResponse = ResasResponse<Composition>
