import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { OsService } from 'src/app/services/os.service';
import { OsResponse } from 'src/app/types/Os.model';

@Component({
  selector: 'app-os',
  templateUrl: './os.component.html',
  styleUrls: ['./os.component.scss']
})
export class OsComponent{

  os$: Observable<OsResponse[]>;

  constructor(
    private osService: OsService,
    private router: Router
  ) {
    this.os$ = this.osService.list();
  }

  detalheOs(id: any): void {
    this.router.navigate(['os/' + id]);
  }
}
