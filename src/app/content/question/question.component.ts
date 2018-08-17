import { Component, OnInit, Input, AfterViewInit, ViewChild} from '@angular/core'
import { Question, Answer, UserAnswer } from '../../models'
import { AnswerComponent } from '../answer/answer.component'
import { TicketAnswerService } from '../../services/ticket-answer.service'
import { MatDialog } from '@angular/material/dialog'
import { DialogComponent } from '../../common/dialog/dialog.component'

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  @Input() question: Question

  constructor(private ticketAnswerService: TicketAnswerService, public dialog: MatDialog) { }

  ticketAnswered: Boolean = false

  private getId() {
    return this.question.id
  }

  getText() {
    return  this.question.text
  }

  showExplanation(): void {
    const explanationRef = this.dialog.open(
      DialogComponent, {
        data: this.question.comment
      }
    )
  }

  getAnswers() {
    return this.question.answers
  }

  private getFirstAnswerId() {
    return this.question.answers[0].id
  }

  getImage() {
    return this.question.imageName
  }

  isThisQuestion(userAnswer: UserAnswer) {
    return userAnswer.questionId === this.question.id
  }

  ngOnInit() {
    this.ticketAnswerService.getAnswer().subscribe((userAnswer) => {
      if (this.isThisQuestion(userAnswer)) {
        this.ticketAnswered = true
      }
    })
  }

}
