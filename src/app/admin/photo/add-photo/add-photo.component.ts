import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PhotoService } from 'src/app/services/Photo/photo.service';
import { UpdatePhotoComponent } from '../update-photo/update-photo.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CoreService } from 'src/app/core/core.service';
import { Terrain } from 'src/app/Model/Terrain/terrain.model';
import { Observable } from 'rxjs';
import { HttpEventType, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-photo',
  templateUrl: './add-photo.component.html',
  styleUrls: ['./add-photo.component.css']
})
export class AddPhotoComponent {
  empForm: FormGroup;

  constructor(
    private photoservice: PhotoService,
    private _fb: FormBuilder,
    private _PhotoService: PhotoService,
    private _dialogRef: MatDialogRef<UpdatePhotoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _coreService: CoreService
  ) {
    this.empForm = this._fb.group({
      url:'',
      terrain:null,
    });
  }
  ngOnInit(): void {
    this.empForm.patchValue(this.data);
    this.getAllTerrain();
    this.imageInfos = this.photoservice.getFiles();

  }
  terr:Terrain[];
   getAllTerrain() {
    this._PhotoService.getAllTerrain().subscribe(
      {
        next: (data1) => {
          this.terr=data1;
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
        this._PhotoService
          .updatePhoto(this.data.id, this.empForm.value)
          .subscribe({
            next: (val: any) => {
              this._coreService.openSnackBar('Photo detail updated!');
              this._dialogRef.close(true);
            },
            error: (err: any) => {
              console.error(err);
            },
          });
      } else {
        this._PhotoService.addPhoto(this.empForm.value).subscribe({
          next: (val: any) => {
            this._coreService.openSnackBar('Photo added successfully');
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
  
  selectedFiles?: FileList;
  selectedFileNames: string[] = [];

  progressInfos: any;
  message: string[] = [];

  previews: string[] = [];
  imageInfos?: Observable<any>;


  selectFiles(event: any): void {
    this.message = [];
    this.progressInfos = [];
    this.selectedFileNames = [];
    this.selectedFiles = event.target.files;
  
    this.previews = [];
    if (this.selectedFiles && this.selectedFiles[0]) {
      const numberOfFiles = this.selectedFiles.length;
      for (let i = 0; i < numberOfFiles; i++) {
        const reader = new FileReader();
  
        reader.onload = (e: any) => {
          console.log(e.target.result);
          this.previews.push(e.target.result);
        };
  
        reader.readAsDataURL(this.selectedFiles[i]);
  
        this.selectedFileNames.push(this.selectedFiles[i].name);
      }
    }
  }

  uploadFiles(): void {
    this.message = [];
  
    if (this.selectedFiles) {
      for (let i = 0; i < this.selectedFiles.length; i++) {
        this.upload(i, this.selectedFiles[i]);
      }
    }
  }
  upload(idx: number, file: File): void {
    this.progressInfos[idx] = { value: 0, fileName: file.name };
  
    if (file) {
      this.photoservice.upload(file).subscribe(
        (event: any) => {
          if (event.type === HttpEventType.UploadProgress) {
            this.progressInfos[idx].value = Math.round(100 * event.loaded / event.total);
          } else if (event instanceof HttpResponse) {
            const msg = 'Uploaded the file successfully: ' + file.name;
            this.message.push(msg);
            this.imageInfos = this.photoservice.getFiles();
          }
        },
        (err: any) => {
          this.progressInfos[idx].value = 0;
          const msg = 'Could not upload the file: ' + file.name;
          this.message.push(msg);
        });
    }
  }



}
