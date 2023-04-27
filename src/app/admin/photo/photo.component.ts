import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { Photo } from 'src/app/Model/Photo/photo.model';
import { CoreService } from 'src/app/core/core.service';
import { PhotoService } from 'src/app/services/Photo/photo.service';
import { AddPhotoComponent } from './add-photo/add-photo.component';
import { UpdatePhotoComponent } from './update-photo/update-photo.component';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent   {
  displayedColumns: string[]=[
    'photoid',
    'url',
    'terrain',
    'action'
  ];
  dataSource!:MatTableDataSource<any>

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor( private _dialog: MatDialog,
    private _PhoService: PhotoService,
    private _coreService: CoreService){}
  ngOnInit(): void {
    this.getPhotoListe();
  }

  
  openAddEditEmpForm() {
    const dialogRef = this._dialog.open(AddPhotoComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getPhotoListe();
        }
      },
    });
  }

  getPhotoListe() {
    this._PhoService.getPhotoList().subscribe({
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
    this._PhoService.deletePhoto(id).subscribe({
      next: (res) => {
        this._coreService.openSnackBar('Photo deleted!', 'done');
        this.getPhotoListe();
      },
      error: console.log,
    });
  }

  openEditForm(data: any) {
    const dialogRef = this._dialog.open(UpdatePhotoComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getPhotoListe();
        }
      },
    });
  } 
}
