import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReservationService } from 'src/app/services/Reservation/reservation.service';
import { UpdateReservationComponent } from '../../reservation/update-reservation/update-reservation.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CoreService } from 'src/app/core/core.service';
import { ClubService } from 'src/app/services/Club/club.service';
import { UpdateClubComponent } from '../update-club/update-club.component';

@Component({
  selector: 'app-add-club',
  templateUrl: './add-club.component.html',
  styleUrls: ['./add-club.component.css']
})
export class AddClubComponent {
empForm: FormGroup;

constructor(
  private _fb: FormBuilder,
  private _ClubService: ClubService,
  private _dialogRef: MatDialogRef<UpdateClubComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any,
  private _coreService: CoreService
) {
  this.empForm = this._fb.group({
    nom:'',
  });
}
ngOnInit(): void {
  this.empForm.patchValue(this.data);
}

onFormSubmit() {
  if (this.empForm.valid) {
    if (this.data) {
      this._ClubService
        .updateEmployee(this.data.idclub, this.empForm.value)
        .subscribe({
          next: (val: any) => {
            this._coreService.openSnackBar('Club detail updated!');
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          },
        });
    } else {
      this._ClubService.addEmployee(this.empForm.value).subscribe({
        next: (val: any) => {
          this._coreService.openSnackBar('Club added successfully');
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
