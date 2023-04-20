import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CoreService } from 'src/app/core/core.service';
import { VilleService } from 'src/app/services/Ville/ville.service';
import { AddVilleComponent } from './add-ville/add-ville.component';
import { UpdateVilleComponent } from './update-ville/update-ville.component';

@Component({
  selector: 'app-ville',
  templateUrl: './ville.component.html',
  styleUrls: ['./ville.component.scss']
})
export class VilleComponent {
  displayedColumns: string[]=[
    'villeid',
    'nom',
    'codePostale',
    'action'
  ];
  dataSource!:MatTableDataSource<any>

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor( private _dialog: MatDialog,
    private _VilleService: VilleService,
    private _coreService: CoreService){}
  ngOnInit(): void {
    this.getPackeListe();
  }

  
  openAddEditEmpForm() {
    const dialogRef = this._dialog.open(AddVilleComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getPackeListe();
        }
      },
    });
  }

  getPackeListe() {
    this._VilleService.getVilleList().subscribe({
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

  deleteVille(id: string) {
    this._VilleService.deleteVille(id).subscribe({
      next: (res) => {
        this._coreService.openSnackBar('Ville deleted!', 'done');
        this.getPackeListe();
      },
      error: console.log,
    });
  }

  openEditForm(data: any) {
    const dialogRef = this._dialog.open(UpdateVilleComponent, {
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
