import { Component,Inject,OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

import { MatTableDataSource } from '@angular/material/table';
import { CoreService } from 'src/app/core/core.service';
import { OccupationService } from 'src/app/services/Occupation/occupation.service';
import { UpdateOccupationComponent } from '../update-occupation/update-occupation.component';
import { Terrain } from 'src/app/Model/Terrain/terrain.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Reservation } from 'src/app/Model/Reservation/reservation.model';

@Component({
  selector: 'app-add-occupation',
  templateUrl: './add-occupation.component.html',
  styleUrls: ['./add-occupation.component.scss']
})
export class AddOccupationComponent implements OnInit  {
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
          .updateOccupation(this.data.id, this.empForm.value)
          .subscribe({
            next: (val: any) => {
              this._coreService.openSnackBar('Employee detail updated!');
              this._dialogRef.close(true);
            },
            error: (err: any) => {
              console.error(err);
            },
          });
      } else {
        this._OccService.addOccupation(this.empForm.value).subscribe({
          next: (val: any) => {
            this._coreService.openSnackBar('Employee added successfully');
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
