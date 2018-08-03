export interface Ticket {
  id: Number
}
export interface Answer {
  id: number
  text: string
  isTrue: boolean
}

export interface Question {
  id: number
  text: string
  comment: string
  imageName: string
  answers: Answer[]
}
export interface TicketContent {
  id: number
  questions: Question[]
}
export interface TicketsResponse {
  tickets: Ticket[]
}

export interface UserAnswer {
  answerId: Number,
  questionId: Number
}
