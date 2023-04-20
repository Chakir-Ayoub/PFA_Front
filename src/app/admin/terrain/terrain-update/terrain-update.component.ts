import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Club } from 'src/app/Model/Club/club.model';
import { Terrain } from 'src/app/Model/Terrain/terrain.model';
import { Zone } from 'src/app/Model/Zone/zone.model';
import { CoreService } from 'src/app/core/core.service';
import { TerrainServiceService } from 'src/app/services/terrain-service.service';

@Component({
  selector: 'app-terrain-update',
  templateUrl: './terrain-update.component.html',
  styleUrls: ['./terrain-update.component.scss']
})
export class TerrainUpdateComponent implements OnInit {
  empForm: FormGroup;
  isChecked=false;
  terrainn:Terrain;
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
      etat:'',
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
    this.getAllTerrain();
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
        },
        error: (err) => {
          console.log(err)
        }
      }
    )
  }
  terran: Terrain[];
  getAllTerrain(){
    this._TerrService.getEmployeeList().subscribe({
      next:(data1)=>{
        this.terran=data1;
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }


  
  onFormSubmit() {
    if (this.empForm.valid) {
      if (this.data) {
        this._TerrService
          .updateEmployee(this.data.terraiid, this.empForm.value)
          .subscribe({
            next: (val: any) => {
              this._coreService.openSnackBar('Terrain detail updated!');
              this._dialogRef.close(true);
            },
            error: (err: any) => {
              console.error(err);
            },
          });
      } else {
        this._TerrService.addEmployee(this.empForm.value).subscribe({
          next: (val: any) => {
            this._coreService.openSnackBar('Terrain added successfully');
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
