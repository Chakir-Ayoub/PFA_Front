import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CoreService } from 'src/app/core/core.service';
import { AbonnementService } from 'src/app/services/Abonnement/abonnement.service';
import { AddAbonnementComponent } from './add-abonnement/add-abonnement.component';
import { UpdateAbonnementComponent } from './update-abonnement/update-abonnement.component';

@Component({
  selector: 'app-abonnement',
  templateUrl: './abonnement.component.html',
  styleUrls: ['./abonnement.component.scss']
})
export class AbonnementComponent {
  displayedColumns: string[]=[
    'idabonnement',
    'date',
    'client',
    'packe',
    'action',

  ];
  dataSource!:MatTableDataSource<any>

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor( private _dialog: MatDialog,
    private _AbonnService: AbonnementService,
    private _coreService: CoreService){}
  ngOnInit(): void {
    this.getAbonnementList();
  }

  openAddEditEmpForm() {
    const dialogRef = this._dialog.open(AddAbonnementComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getAbonnementList();
        }
      },
    });
  }

  getAbonnementList() {
    this._AbonnService.getAbonnementList().subscribe({
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

  deleteAbonnement(id: string) {
    this._AbonnService.deleteAbonnement(id).subscribe({
      next: (res) => {
        this._coreService.openSnackBar('Abonnement deleted!', 'done');
        this.getAbonnementList();
      },
      error: console.log,
    });
  }

  openEditForm(data: any) {
    const dialogRef = this._dialog.open(UpdateAbonnementComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getAbonnementList();
        }
      },
    });
  }  
}
