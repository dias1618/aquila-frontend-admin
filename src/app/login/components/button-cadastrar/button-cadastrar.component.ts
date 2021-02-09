import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'button-cadastrar',
  templateUrl: './button-cadastrar.component.html',
  styleUrls: ['./button-cadastrar.component.scss']
})
export class ButtonCadastrarComponent implements OnInit {

  constructor(
    private router:Router,
  ) { }

  ngOnInit(): void {
  }

  signup($event){
    this.router.navigate([`../signup`]);
  }

}
