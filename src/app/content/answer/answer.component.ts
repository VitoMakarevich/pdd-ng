import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { Answer, UserAnswer } from '../../models'
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

  private isQuestionAnswered: Boolean
  constructor(private ticketAnswer: TicketAnswerService) {
    this.isQuestionAnswered = false
  }

  ngOnInit() {
    this.ticketAnswer.getAnswer().subscribe((userAnswer: UserAnswer) => {
      if (this.isThisQuestion(userAnswer)) {
        this.isQuestionAnswered = true
      }
    })
  }

  private getAnswerStatus(userAnswer: UserAnswer) {
    if (this.isThisQuestion(userAnswer)) {
      this.isQuestionAnswered = true
    }
  }

  private isThisQuestion(userAnswer: UserAnswer) {
    return userAnswer.questionId === this.questionId
  }

  private isThisAnswer(userAnswer: UserAnswer) {
    return userAnswer.answerId === this.answer.id &&
      userAnswer.questionId === this.questionId
  }

  private answered() {
    if (!this.isQuestionAnswered) {
      const answer: UserAnswer = {
        answerId: this.answer.id,
        questionId: this.questionId,
        isTrue: this.answer.isTrue
      }
      this.ticketAnswer.setAnswer(answer)
    }
  }

}
