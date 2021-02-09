import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.scss']
})
export class NameComponent implements OnInit {

  @Input() formGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
