import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payday-edit',
  templateUrl: './payday-edit.component.html',
  styleUrls: ['./payday-edit.component.scss']
})
export class PaydayEditComponent implements OnInit{

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {

  }

  salvarPayday(): void {

  }
}
