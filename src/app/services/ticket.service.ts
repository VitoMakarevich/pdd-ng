import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Ticket } from '@assets/models'
import {map, delay} from 'rxjs/operators'

export interface TicketsResponse {
  tickets: Ticket[]
}

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http: HttpClient) { }

  public getTickets() {
    return this.http.get<TicketsResponse>('http://localhost/api/tickets')
      .pipe(
        map(ticketsResponse => ticketsResponse.tickets)
      )
  }
}
