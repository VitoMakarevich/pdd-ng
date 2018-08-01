import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Ticket } from '@assets/models'

export interface TicketsResponse {
  tickets: Ticket[]
}

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http: HttpClient) { }

  public getTickets() {
    return this.http.get<TicketsResponse>('http://138.68.157.14/api/tickets')
  }
}
