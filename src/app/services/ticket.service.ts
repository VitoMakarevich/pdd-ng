import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Ticket, TicketsResponse, TicketContent } from '../models'
import {environment} from '../../environments/environment'
import {map, delay} from 'rxjs/operators'
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http: HttpClient) { }

  public getTickets() {
    return this.http.get<TicketsResponse>(`http://${environment.apiRoot}/api/tickets`)
      .pipe(
        map(ticketsResponse => ticketsResponse.tickets)
      )
  }
  public getTicket(id: String) {
    return this.http.get<TicketContent>(`http://${environment.apiRoot}/api/ticket?id=${id}`)
  }
}
