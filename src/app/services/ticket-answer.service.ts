import { Injectable } from '@angular/core'
import { UserAnswer } from '../models'
import { Observable, Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class TicketAnswerService {
  public static ticketLength = 20

  private userAnswers: UserAnswer[]
  private userAnswered: Subject<UserAnswer>

  constructor() {
    this.userAnswers = []
    this.userAnswered = new Subject()
  }

  public setAnswer(userAnswer: UserAnswer) {
    this.userAnswers.push(userAnswer)
    this.userAnswered.next(userAnswer)
    if (this.userAnswers.length === TicketAnswerService.ticketLength) {
        this.userAnswered.complete()
    }
  }

  public getUserAnswers(): UserAnswer[] {
    return this.userAnswers
  }

  public getAnswer(): Observable<UserAnswer> {
    return this.userAnswered
  }
}
