import { Component,Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Reservation } from 'src/app/Model/Reservation/reservation.model';
import { Terrain } from 'src/app/Model/Terrain/terrain.model';
import { CoreService } from 'src/app/core/core.service';
import { OccupationService } from 'src/app/services/Occupation/occupation.service';

@Component({
  selector: 'app-update-occupation',
  templateUrl: './update-occupation.component.html',
  styleUrls: ['./update-occupation.component.css']
})
export class UpdateOccupationComponent {
  empForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _OccService: OccupationService,
    private _dialogRef: MatDialogRef<UpdateOccupationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _coreService: CoreService
  ) {
    this.empForm = this._fb.group({
      date:'',
      heure:'',
      terrain:'',
      reservation:''
    });
  }

  ngOnInit(): void {
    this.empForm.patchValue(this.data);
    this.getAllTerrain();
    this.getAllReservation();
  }




  Terr: Terrain[];
  getAllTerrain() {
    this._OccService.getAllTerrain().subscribe(
      {
        next: (data1) => {
          this.Terr=data1;
          console.log(this.Terr);
          // console.log(this.priorities)
        },
        error: (err) => {
          console.log(err)
        }
      }
    )
  }

  Reser: Reservation[];
  getAllReservation() {
    this._OccService.getAllReservation().subscribe(
      {
        next: (data1) => {
          this.Reser=data1;
          console.log(this.Reser);
        },
        error: (err) => {
          console.log(err)
        }
      }
    )
  }

  onFormSubmit() {
    if (this.empForm.valid) {
      if (this.data) {
        this._OccService
          .updateOccupation(this.data.idoccupation, this.empForm.value)
          .subscribe({
            next: (val: any) => {
              this._coreService.openSnackBar('Occupation detail updated!');
              this._dialogRef.close(true);
            },
            error: (err: any) => {
              console.error(err);
            },
          });
      } else {
        this._OccService.addOccupation(this.empForm.value).subscribe({
          next: (val: any) => {
            this._coreService.openSnackBar('Occupation added successfully');
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
