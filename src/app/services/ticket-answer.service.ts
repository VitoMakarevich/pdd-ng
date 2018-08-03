import { Injectable } from '@angular/core'
import { UserAnswer } from '@assets/models'
import { Observable, Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class TicketAnswerService {
  private userAnswers: UserAnswer[]
  private userAnswered: Subject<UserAnswer>

  constructor() {
    this.userAnswers = []
    this.userAnswered = new Subject()
  }

  public setAnswer(userAnswer: UserAnswer) {
    this.userAnswers.push(userAnswer)
    this.userAnswered.next(userAnswer)
  }

  public getAnswer() {
    return this.userAnswered
  }
}
