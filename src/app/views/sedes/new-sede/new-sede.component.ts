import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { SedesService } from '../../../services/sedes/sedes.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-new-sede',
  templateUrl: './new-sede.component.html'
})
export class NewSedeComponent {

  public sedeForm: FormGroup;
  public checked: boolean;

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private sedeService: SedesService,
    public dialogRef: MatDialogRef<NewSedeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.loadForm();
  }

  onNoClick (): void {
    this.dialogRef.close();
  }

  private loadForm () {
    this.sedeForm = this.fb.group({
      name: ['', Validators.required],
      status: [false, Validators.required]
    });
  }

  private saveNewSede () {
    let subs: Subscription;
    new Promise((resolve, reject) => {
      subs = this.sedeService.create(this.sedeForm.value).subscribe((response: HttpResponse<any>) => {
        resolve(response['body']);
      }, err => {
        reject(err);
      });
    }).then(val => {
      this.snackBar.open('Guardado con exito', 'Cerrar', { duration: 2000});
      this.dialogRef.close(val);
    }).catch(err => {
      console.error(err);
      this.snackBar.open('Error' + err, 'Cerrar', { duration: 2000});
    });
  }

}
