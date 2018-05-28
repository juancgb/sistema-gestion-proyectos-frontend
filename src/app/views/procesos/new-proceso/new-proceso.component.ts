import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-new-proceso',
  templateUrl: './new-proceso.component.html'
})
export class NewProcesoComponent {

  public procesoForm: FormGroup;
  public nivelesForm: FormGroup;
  public actividadesForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<NewProcesoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.loadForms();
  }

  private loadForms () {
    this.procesoForm = this.fb.group({
      office_id: ['', Validators.required],
      career_id: ['', Validators.required],
      name: ['', Validators.required]
    });

    this.nivelesForm = this.fb.group({
      project_process_id: ['', Validators.required],
      project_level_status_id: ['', Validators.required],
      mandatory: [false, Validators.required],
      request: [false, Validators.required],
      name: ['', Validators.required],
      description: ['', Validators.required]
    });

    this.actividadesForm = this.fb.group({
      process_level_id: ['', Validators.required],
      project_process_id: ['', Validators.required],
      name: ['', Validators.required],
      description: ['', Validators.required],
      start_date: [new Date(), Validators.required],
      end_date: [new Date(), Validators.required]
    });
  }

}
