import { TestBed, inject } from '@angular/core/testing'

import { TicketStorageService } from './ticket-storage.service'

describe('TicketStorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TicketStorageService]
    })
  })

  it('should be created', inject([TicketStorageService], (service: TicketStorageService) => {
    expect(service).toBeTruthy()
  }))
})
