import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ManufactureService } from 'src/app/services/manufacture.service';

@Component({
  selector: 'app-manufacture-edit',
  templateUrl: './manufacture-edit.component.html',
  styleUrls: ['./manufacture-edit.component.scss']
})
export class ManufactureEditComponent implements OnInit{

  id: string;

  form!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private servicesService: ManufactureService
  ) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      id: [''],
      desc: [''],
      amount: [0]
    });

    this.getData();
  }

  getData() {
    this.servicesService.findById(this.id).subscribe({
      next: data => this.form.patchValue(data),
      error: console.log
    });
  }

  salvarServico(): void {
    this.servicesService.update(this.form.value).subscribe({
      next: () => this.router.navigate([`servico/${this.id}`]),
      error: console.log
    });
  }
}
