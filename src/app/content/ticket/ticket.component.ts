import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { TicketService } from '../../services/ticket.service'
import { TicketContent } from '@assets/models'

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {
  private id: String
  private ticketContent: TicketContent

  constructor(
    private route: ActivatedRoute,
    private ticketService: TicketService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(({id}) => {
      this.id = id
      this.ticketService.getTicket(id).subscribe((ticketContent: TicketContent) => {
        this.ticketContent = ticketContent
      })
    })
  }

}
