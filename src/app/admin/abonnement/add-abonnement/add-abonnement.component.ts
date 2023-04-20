import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AbonnementService } from 'src/app/services/Abonnement/abonnement.service';
import { UpdateAbonnementComponent } from '../update-abonnement/update-abonnement.component';
import { CoreService } from 'src/app/core/core.service';
import { Packe } from 'src/app/Model/Packe/packe.model';
import { Client } from 'src/app/Model/Client/client.model';

@Component({
  selector: 'app-add-abonnement',
  templateUrl: './add-abonnement.component.html',
  styleUrls: ['./add-abonnement.component.css']
})
export class AddAbonnementComponent implements OnInit {
  empForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _AbonnService: AbonnementService,
    private _dialogRef: MatDialogRef<UpdateAbonnementComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _coreService: CoreService
  ) {
    this.empForm = this._fb.group({
      idabonnement:'',
      date:'',
      client:null,
      packe:null,
    });
  }

  ngOnInit(): void {
    this.empForm.patchValue(this.data);
    this.getAllClub();
    this.getAllZone();
  }
  packe:Packe[];
  getAllClub() {
    this._AbonnService.getAllPacke().subscribe(
      {
        next: (data1) => {
          this.packe=data1;
        },
        error: (err) => {
          console.log(err)
        }
      }
    )
  }

  client: Client[];
  getAllZone() {
    this._AbonnService.getAllClient().subscribe(
      {
        next: (data1) => {
          this.client=data1;
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
        this._AbonnService
          .updateAbonnement(this.data.id, this.empForm.value)
          .subscribe({
            next: (val: any) => {
              this._coreService.openSnackBar('Abonnement detail updated!');
              this._dialogRef.close(true);
            },
            error: (err: any) => {
              console.error(err);
            },
          });
      } else {
        this._AbonnService.addAbonnement(this.empForm.value).subscribe({
          next: (val: any) => {
            this._coreService.openSnackBar('Abonnement added successfully');
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
