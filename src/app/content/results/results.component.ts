import { Component, OnInit } from '@angular/core'
import { TicketStorageService } from '../../services/ticket-storage.service'
import { SavedTicket } from '../../models'

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  savedTickets: SavedTicket[]
  displayedColumns = ['id', 'rightAnswersCount', 'wrongAnswersCount']
  constructor(private ticketsStorageService: TicketStorageService) { }

  ngOnInit() {
      this.savedTickets = this.ticketsStorageService.getSavedTickets()
      this.ticketsStorageService
        .getSavedTicketsObservable()
        .subscribe((savedTickets) => {
          this.savedTickets = savedTickets.sort(
            (ticket1, ticket2) => new Date(ticket1.datetime).getTime() - new Date(ticket2.datetime).getTime()
          )
        })
  }

}
