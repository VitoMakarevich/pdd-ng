import { Component, OnInit } from '@angular/core'
import { TicketAnswerService } from '../../services/ticket-answer.service'
import { UserAnswer } from '../..//models'

@Component({
  selector: 'app-ticket-result',
  templateUrl: './ticket-result.component.html',
  styleUrls: ['./ticket-result.component.scss']
})
export class TicketResultComponent implements OnInit {
  dataSource: UserAnswer[]
  displayedColumns: String[] = [
    'answerId',
    'isTrue'
  ]
  constructor(private ticketAnswerService: TicketAnswerService) {
    this.dataSource = this.ticketAnswerService.getUserAnswers()
  }

  ngOnInit() {
  }

}
