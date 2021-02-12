import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {

  @Input() formGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
