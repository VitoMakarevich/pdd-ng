import { TestBed, inject } from '@angular/core/testing'

import { TicketAnswerService } from './ticket-answer.service'

describe('TicketAnswerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TicketAnswerService]
    })
  })

  it('should be created', inject([TicketAnswerService], (service: TicketAnswerService) => {
    expect(service).toBeTruthy()
  }))
})
