import { Component, OnInit, OnDestroy } from '@angular/core'
import { TicketAnswerService } from '../../services/ticket-answer.service'
import { UserAnswer } from '../..//models'

@Component({
  selector: 'app-ticket-result',
  templateUrl: './ticket-result.component.html',
  styleUrls: ['./ticket-result.component.scss']
})
export class TicketResultComponent implements OnDestroy {
  dataSource: UserAnswer[]
  displayedColumns: String[] = [
    'questionId',
    'isTrue'
  ]
  constructor(private ticketAnswerService: TicketAnswerService) {
    this.dataSource = this.ticketAnswerService
      .getUserAnswers()
      .sort((userAnswer1, userAnswer2) => userAnswer1.questionId - userAnswer2.questionId)
  }

  ngOnDestroy() {
    this.ticketAnswerService.clear()
  }
}
