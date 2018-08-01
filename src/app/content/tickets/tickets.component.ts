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

  constructor(private ticketService: TicketService) { }

  ngOnInit() {
    this.ticketService.getTickets().subscribe(ticketsResponse => this.tickets = ticketsResponse.tickets)
  }

}
