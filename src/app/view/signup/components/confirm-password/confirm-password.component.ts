import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'confirm-password',
  templateUrl: './confirm-password.component.html',
  styleUrls: ['./confirm-password.component.scss']
})
export class ConfirmPasswordComponent implements OnInit {

  @Input() formGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
