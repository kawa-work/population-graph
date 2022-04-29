type Message = String | null

interface Prefecture {
  prefCode: Number
  prefName: String
}

type Prefectures = Prefecture[]

export interface PrefecturesResponse {
  message: Message
  result: Prefectures
}
