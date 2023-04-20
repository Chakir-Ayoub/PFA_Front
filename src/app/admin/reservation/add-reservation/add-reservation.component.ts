import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReservationService } from 'src/app/services/Reservation/reservation.service';
import { UpdateReservationComponent } from '../update-reservation/update-reservation.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CoreService } from 'src/app/core/core.service';
import { Client } from 'src/app/Model/Client/client.model';

@Component({
  selector: 'app-add-reservation',
  templateUrl: './add-reservation.component.html',
  styleUrls: ['./add-reservation.component.css']
})
export class AddReservationComponent {
  empForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _ResrService: ReservationService,
    private _dialogRef: MatDialogRef<UpdateReservationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _coreService: CoreService
  ) {
    this.empForm = this._fb.group({
      date:'',
      etat:false,
      clientid:null,
    });
  }
  ngOnInit(): void {
    this.empForm.patchValue(this.data);
    this.getAllClient();
  }

  onFormSubmit() {
    if (this.empForm.valid) {
      if (this.data) {
        this._ResrService
          .updateReservation(this.data.id, this.empForm.value)
          .subscribe({
            next: (val: any) => {
              this._coreService.openSnackBar('Reservation detail updated!');
              this._dialogRef.close(true);
            },
            error: (err: any) => {
              console.error(err);
            },
          });
      } else {
        this._ResrService.addReservation(this.empForm.value).subscribe({
          next: (val: any) => {
            this._coreService.openSnackBar('Reservation added successfully');
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

  client: Client[];
  getAllClient() {
    this._ResrService.getAllClient().subscribe(
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
}
