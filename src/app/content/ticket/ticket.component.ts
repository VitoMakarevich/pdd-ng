import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { TicketService } from '../../services/ticket.service'
import { TicketContent, Question } from '@assets/models'
import { Observable, from } from 'rxjs'
import { concat, map, switchMap } from 'rxjs/operators'

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {
  private id: String
  private ticketId: Number
  private questions: Question[]
  private loading: Boolean

  constructor(
    private route: ActivatedRoute,
    private ticketService: TicketService
  ) { }

  private getQuestions() {
    return this.questions
  }

  ngOnInit() {
    this.loading = true
    return this.route.params.pipe(
      switchMap(({id}) => this.ticketService.getTicket(id))
    ).subscribe((ticketContent: any) => {
      this.loading = false
      this.ticketId = ticketContent.id
      this.questions = ticketContent.questions
    })
  }

}
