import { Injectable } from '@angular/core'
import { LocalStorageService, LocalStorage } from 'ngx-webstorage'
import { UserAnswer, FinishedTicket, SavedTicket } from '../models'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class TicketStorageService {
  constructor(private localStorageService: LocalStorageService) { }

  storageFieldName = 'savedTickets'

  public saveTicket(finishedTicket: FinishedTicket): void {
    const previousTickets: SavedTicket[] = this.getSavedTickets()
    const savedTicket: SavedTicket = {
      datetime: new Date(),
      ...finishedTicket
    }
    const newTickets = [
      ...previousTickets,
      savedTicket
    ]

    this.localStorageService.store(this.storageFieldName, newTickets)
  }

  getSavedTickets(): SavedTicket[] {
    return this.localStorageService.retrieve(this.storageFieldName) || []
  }

  getSavedTicketsObservable(): Observable<SavedTicket[]> {
    return this.localStorageService.observe(this.storageFieldName)
  }
}
