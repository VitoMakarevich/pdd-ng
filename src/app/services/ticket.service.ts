import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Ticket, TicketsResponse, TicketContent } from '@assets/models'
import {map, delay} from 'rxjs/operators'
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { Observable } from 'rxjs'

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
  public getTicket(id: String) {
    return this.http.get<TicketContent>(`http://localhost/api/ticket?id=${id}`)
  }
}
