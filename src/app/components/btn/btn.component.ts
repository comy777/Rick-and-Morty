import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html'
})
export class BtnComponent implements OnInit {

  @Input() onClick?: Function
  @Input() title: string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
