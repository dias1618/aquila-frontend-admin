import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {

  @Input() formGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
