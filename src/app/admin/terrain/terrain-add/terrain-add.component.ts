import { Component, Inject, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TerrainServiceService } from 'src/app/services/terrain-service.service';
import { TerrainUpdateComponent } from '../terrain-update/terrain-update.component';
import { CoreService } from 'src/app/core/core.service';
import { Club } from 'src/app/Model/Club/club.model';
import { Zone } from 'src/app/Model/Zone/zone.model';

@Component({
  selector: 'app-terrain-add',
  templateUrl: './terrain-add.component.html',
  styleUrls: ['./terrain-add.component.scss'],
})
export class TerrainAddComponent implements OnInit {
  empForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _TerrService: TerrainServiceService,
    private _dialogRef: MatDialogRef<TerrainUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _coreService: CoreService
  ) {
    this.empForm = this._fb.group({
      type:'',
      adresse:'',
      attitude:'',
      descriptuon:'',
      etat:false,
      longitude:'',
      nom:'',
      tarif:'',
      club:null,
      zone:null,
    });
  }

  ngOnInit(): void {
    this.empForm.patchValue(this.data);
    this.getAllClub();
    this.getAllZone();
  }
  clubb: Club[];
  getAllClub() {
    this._TerrService.getAllClub().subscribe(
      {
        next: (data1) => {
          this.clubb=data1;
        },
        error: (err) => {
          console.log(err)
        }
      }
    )
  }

  Zonee: Zone[];
  getAllZone() {
    this._TerrService.getAllZone().subscribe(
      {
        next: (data1) => {
          this.Zonee=data1;
          console.log(this.Zonee);
          // console.log(this.priorities)
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
        this._TerrService
          .updateEmployee(this.data.id, this.empForm.value)
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
        this._TerrService.addEmployee(this.empForm.value).subscribe({
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
