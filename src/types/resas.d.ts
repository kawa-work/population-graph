type Message = String | null

interface ResasResponse<T> {
  message: Message
  result: T
}

export interface Prefecture {
  prefCode: number
  prefName: String
}

export type Prefectures = Prefecture[]

export type PrefecturesResponse = ResasResponse<Prefectures>

export interface CompositionDataItem {
  label: String
  data: Array<{
    year: number
    value: number
    rate?: number
  }>
}
export interface Composition {
  boundaryYear: number
  data: CompositionDataItem[]
}

export type CompositionResponse = ResasResponse<Composition>
