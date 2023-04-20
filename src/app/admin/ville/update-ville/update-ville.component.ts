import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CoreService } from 'src/app/core/core.service';
import { VilleService } from 'src/app/services/Ville/ville.service';

@Component({
  selector: 'app-update-ville',
  templateUrl: './update-ville.component.html',
  styleUrls: ['./update-ville.component.css']
})
export class UpdateVilleComponent {
  empForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _VilleService: VilleService,
    private _dialogRef: MatDialogRef<UpdateVilleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _coreService: CoreService
  ) {
    this.empForm = this._fb.group({
      nom:'',
      codePostale:''
    });
  }
  ngOnInit(): void {
    this.empForm.patchValue(this.data);
  }

  onFormSubmit() {
    if (this.empForm.valid) {
      if (this.data) {
        this._VilleService
          .updateVille(this.data.villeid, this.empForm.value)
          .subscribe({
            next: (val: any) => {
              this._coreService.openSnackBar('Ville detail updated!');
              this._dialogRef.close(true);
            },
            error: (err: any) => {
              console.error(err);
            },
          });
      } else {
        this._VilleService.addVille(this.empForm.value).subscribe({
          next: (val: any) => {
            this._coreService.openSnackBar('Ville added successfully');
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
