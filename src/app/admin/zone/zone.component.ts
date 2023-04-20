import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CoreService } from 'src/app/core/core.service';
import { ZoneService } from 'src/app/services/Zone/zone.service';
import { AddZoneComponent } from './add-zone/add-zone.component';
import { UpdateZoneComponent } from './update-zone/update-zone.component';

@Component({
  selector: 'app-zone',
  templateUrl: './zone.component.html',
  styleUrls: ['./zone.component.scss']
})
export class ZoneComponent {
  displayedColumns: string[]=[
    'zoneid',
    'nom',
    'ville',
    'action'
  ];
  dataSource!:MatTableDataSource<any>

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor( private _dialog: MatDialog,
    private _ZoneService: ZoneService,
    private _coreService: CoreService){}
  ngOnInit(): void {
    this.getPackeListe();
  }

  
  openAddEditEmpForm() {
    const dialogRef = this._dialog.open(AddZoneComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getPackeListe();
        }
      },
    });
  }

  getPackeListe() {
    this._ZoneService.getZoneList().subscribe({
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

  deleteEmployee(id: string) {
    this._ZoneService.deleteZone(id).subscribe({
      next: (res) => {
        this._coreService.openSnackBar('Zone deleted!', 'done');
        this.getPackeListe();
      },
      error: console.log,
    });
  }

  openEditForm(data: any) {
    const dialogRef = this._dialog.open(UpdateZoneComponent, {
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
