import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ZoneService } from 'src/app/services/Zone/zone.service';
import { UpdateZoneComponent } from '../update-zone/update-zone.component';
import { CoreService } from 'src/app/core/core.service';
import { Ville } from 'src/app/Model/Ville/ville.model';

@Component({
  selector: 'app-add-zone',
  templateUrl: './add-zone.component.html',
  styleUrls: ['./add-zone.component.css']
})
export class AddZoneComponent {
  empForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _ZoneService: ZoneService,
    private _dialogRef: MatDialogRef<UpdateZoneComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _coreService: CoreService
  ) {
    this.empForm = this._fb.group({
      nom:'',
      ville:'',
    });
  }
  ngOnInit(): void {
    this.empForm.patchValue(this.data);
    this.getAllVille();
  }

  onFormSubmit() {
    if (this.empForm.valid) {
      if (this.data) {
        this._ZoneService
          .updateZone(this.data.idreservation, this.empForm.value)
          .subscribe({
            next: (val: any) => {
              this._coreService.openSnackBar('Zone detail updated!');
              this._dialogRef.close(true);
            },
            error: (err: any) => {
              console.error(err);
            },
          });
      } else {
        this._ZoneService.addZone(this.empForm.value).subscribe({
          next: (val: any) => {
            this._coreService.openSnackBar('Zone added successfully');
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

  ville: Ville[];
  getAllVille() {
    this._ZoneService.getAllVille().subscribe(
      {
        next: (data1) => {
          this.ville=data1;
        },
        error: (err) => {
          console.log(err)
        }
      }
    )
  }


}
