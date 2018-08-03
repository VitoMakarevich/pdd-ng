import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { Answer, UserAnswer } from '@assets/models'
import { TicketAnswerService } from '../../services/ticket-answer.service'

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss']
})
export class AnswerComponent implements OnInit {
  @Input() answer: Answer
  @Input() questionId: Number
  @Output() answerEmitter = new EventEmitter<Number>()

  private isAnsweredTrue: Boolean
  private isAnswered: Boolean
  constructor(private ticketAnswer: TicketAnswerService) {
    this.isAnsweredTrue = false
    this.isAnswered = false
  }

  ngOnInit() {
    this.ticketAnswer.getAnswer().subscribe((userAnswer: UserAnswer) => {
      if (this.isThisQuestion(userAnswer)) {
        this.isAnswered = true
      }
      if (this.isThisAnswer(userAnswer)) {
        this.isAnsweredTrue = true
      }
    })
  }

  private isThisQuestion(userAnswer: UserAnswer) {
    return userAnswer.questionId === this.questionId
  }

  private isThisAnswer(userAnswer: UserAnswer) {
    return userAnswer.answerId === this.answer.id &&
      userAnswer.questionId === this.questionId
  }

  private answered() {
    const answerId = this.answer.id
    this.answerEmitter.emit(answerId)
  }

}
