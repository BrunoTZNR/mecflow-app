import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OsService } from 'src/app/services/os.service';
import { Os } from 'src/app/types/Os.interface';

@Component({
  selector: 'app-os',
  templateUrl: './os.component.html',
  styleUrls: ['./os.component.scss']
})
export class OsComponent implements OnInit{

  oss!: Os[];

  constructor(
    private osService: OsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.oss = this.osService.getAllOs();

    console.log(this.oss);
  }

  detalheOs(id: any): void {
    this.router.navigate(['os/' + id]);
  }
}
