import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manufacture-edit-os',
  templateUrl: './manufacture-edit-os.component.html',
  styleUrls: ['./manufacture-edit-os.component.scss']
})
export class ManufactureEditOsComponent implements OnInit{

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {

  }

  salvarServicoOs(): void {

  }
}
