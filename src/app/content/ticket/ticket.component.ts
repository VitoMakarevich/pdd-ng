import { Component, OnInit, OnDestroy } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { TicketService } from '../../services/ticket.service'
import { TicketContent, Question } from '../../models'
import { Observable, from } from 'rxjs'
import { concat, map, switchMap } from 'rxjs/operators'
import { TicketAnswerService } from '../../services/ticket-answer.service'

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit, OnDestroy {
  private id: String
  private ticketId: Number
  private questions: Question[]
  loading: Boolean

  constructor(
    private route: ActivatedRoute,
    private ticketService: TicketService,
    private ticketAnswer: TicketAnswerService,
    private router: Router,
  ) { }

  private getQuestions() {
    return this.questions
  }

  ngOnDestroy() {
    if (!this.ticketAnswer.isCompleted()) {
      this.ticketAnswer.clear()
    }
  }

  ngOnInit() {
    this.loading = true
    this.route.params.pipe(
      switchMap(({id}) => this.ticketService.getTicket(id))
    ).subscribe(
      (ticketContent: any) => {
        this.loading = false
        this.ticketId = ticketContent.id
        this.questions = ticketContent.questions
      }
    )
    this.ticketAnswer.getAnswer().subscribe(
      {
        complete: () => {
          this.router.navigate(
            ['result'],
            {
              relativeTo: this.route
            }
          )
        }
      }
    )
  }

}
