import { Component, OnInit, Input, AfterViewInit, ViewChild} from '@angular/core'
import { Question, Answer, UserAnswer } from '@assets/models'
import { AnswerComponent } from '../answer/answer.component'
import { TicketAnswerService } from '../../services/ticket-answer.service'

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  @Input() question: Question

  constructor(private ticketAnswerService: TicketAnswerService) { }

  private getId() {
    return this.question.id
  }

  private getText() {
    return  this.question.text
  }

  private getAnswers() {
    return this.question.answers
  }

  private getFirstAnswerId() {
    return this.question.answers[0].id
  }

  private getImage() {
    return this.question.imageName
  }

  ngOnInit() {
  }

  onAnswer(answerId) {
    const userAnswer: UserAnswer = {
      questionId: this.question.id,
      answerId: answerId,
    }
    this.ticketAnswerService.setAnswer(userAnswer)
  }

}
