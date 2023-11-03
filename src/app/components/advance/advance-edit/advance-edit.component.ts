import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-advance-edit',
  templateUrl: './advance-edit.component.html',
  styleUrls: ['./advance-edit.component.scss']
})
export class AdvanceEditComponent implements OnInit{

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {

  }

  salvarAdvance(): void {

  }
}
