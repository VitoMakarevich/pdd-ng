import { Component, OnInit } from '@angular/core'
import {Ticket} from '@assets/models'
import { TicketService } from '../../services/ticket.service'
@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {

  private tickets: Ticket[]
  private loading: boolean

  constructor(private ticketService: TicketService) {this.loading = true }

  ngOnInit() {
    this.ticketService.getTickets().subscribe(tickets => {
      this.loading = false
      this.tickets = tickets
    })
  }

}
