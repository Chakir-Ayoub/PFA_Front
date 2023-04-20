import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Packe } from 'src/app/Model/Packe/packe.model';
import { CoreService } from 'src/app/core/core.service';
import { PackeserviceService } from 'src/app/services/Packe/packeservice.service';
import { UpdatePackeComponent } from './update-packe/update-packe.component';
import { AddPackeComponent } from './add-packe/add-packe.component';

@Component({
  selector: 'app-packe',
  templateUrl: './packe.component.html',
  styleUrls: ['./packe.component.scss']
})
export class PackeComponent implements OnInit {
  displayedColumns: string[]=[
    'idpacke',
    'nom',
    'tarif',
    'nbr_match',
    'action'
  ];
  dataSource!:MatTableDataSource<any>

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor( private _dialog: MatDialog,
    private _PackService: PackeserviceService,
    private _coreService: CoreService){}
  ngOnInit(): void {
    this.getPackeListe();
  }

  
  openAddEditEmpForm() {
    const dialogRef = this._dialog.open(AddPackeComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getPackeListe();
        }
      },
    });
  }

  getPackeListe() {
    this._PackService.getPackeList().subscribe({
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
    this._PackService.deletePacke(id).subscribe({
      next: (res) => {
        this._coreService.openSnackBar('Packe deleted!', 'done');
        this.getPackeListe();
      },
      error: console.log,
    });
  }

  openEditForm(data: any) {
    const dialogRef = this._dialog.open(UpdatePackeComponent, {
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
