import { Component, ViewChild } from '@angular/core';
import { UpdateOccupationComponent } from './update-occupation/update-occupation.component';
import { AddOccupationComponent } from './add-occupation/add-occupation.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { CoreService } from 'src/app/core/core.service';
import { OccupationService } from 'src/app/services/Occupation/occupation.service';

@Component({
  selector: 'app-occupation',
  templateUrl: './occupation.component.html',
  styleUrls: ['./occupation.component.scss']
})
export class OccupationComponent {
  displayedColumns: string[]=[
    'idoccupation',
    'date',
    'heure',
    'terrain',
    'reservation',
    'action'
  ];
  dataSource!:MatTableDataSource<any>

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor( private _dialog: MatDialog,
    private _OccService: OccupationService,
    private _coreService: CoreService){}
  ngOnInit(): void {
    this.getPackeListe();
  }

  
  openAddEditEmpForm() {
    const dialogRef = this._dialog.open(AddOccupationComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getPackeListe();
        }
      },
    });
  }

  getPackeListe() {
    this._OccService.getOccupationList().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: console.log,
    });
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteOccupation(id: string) {
    this._OccService.deleteOccupation(id).subscribe({
      next: (res) => {
        this._coreService.openSnackBar('Occupation deleted!', 'done');
        this.getPackeListe();
      },
      error: console.log,
    });
  }

  openEditForm(data: any) {
    const dialogRef = this._dialog.open(UpdateOccupationComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getPackeListe();
        }
      },
    });
  } 
}
