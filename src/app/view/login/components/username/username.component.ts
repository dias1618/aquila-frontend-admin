import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.scss']
})
export class UsernameComponent implements OnInit {

  @Input() formGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
