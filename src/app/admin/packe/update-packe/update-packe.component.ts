import { Component,Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Packe } from 'src/app/Model/Packe/packe.model';
import { CoreService } from 'src/app/core/core.service';
import { PackeserviceService } from 'src/app/services/Packe/packeservice.service';

@Component({
  selector: 'app-update-packe',
  templateUrl: './update-packe.component.html',
  styleUrls: ['./update-packe.component.scss']
})
export class UpdatePackeComponent implements OnInit {

  empForm: FormGroup;
  isChecked=false;
  Packee:Packe;
  constructor(
    private _fb: FormBuilder,
    private _PackService: PackeserviceService,
    private _dialogRef: MatDialogRef<UpdatePackeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _coreService: CoreService
  ) {
    this.empForm = this._fb.group({
      nom:'',
      tarif:null,
      nbr_match:'',
    });
  }

  ngOnInit(): void {
    this.empForm.patchValue(this.data);
  }

  onFormSubmit() {
    if (this.empForm.valid) {
      if (this.data) {
        this._PackService
          .updatePacke(this.data.idpacke, this.empForm.value)
          .subscribe({
            next: (val: any) => {
              this._coreService.openSnackBar('Packe detail updated!');
              this._dialogRef.close(true);
            },
            error: (err: any) => {
              console.log(this.data.idpacke);
              console.error(err);
            },
          });
      } else {
        this._PackService.addPacke(this.empForm.value).subscribe({
          next: (val: any) => {
            this._coreService.openSnackBar('Packe added successfully');
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.log(this.empForm.value);
            console.error(err);
          },
        });
      }
    }
  }
}
