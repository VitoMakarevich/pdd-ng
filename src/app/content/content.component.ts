import { Component, OnInit } from '@angular/core'
import { Routes } from '@angular/router'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  navLinks = [
    {path: 'tickets', label: 'Билеты'},
    {path: 'results', label: 'Результаты'}
  ]

  constructor() {
  }

  ngOnInit() {
  }

}
