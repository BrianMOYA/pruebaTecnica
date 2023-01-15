import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

// Importación del servicio
import { ApiService } from './../services/api.service';



@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  FileformatList = ["Formato CSV", "Formarto TXT", "Formato PNG"];
  fileForm !: FormGroup;
  actionBtn : string = "Guardar";

  constructor(
    private formBuilder : FormBuilder,

    private api : ApiService,
    @Inject(MAT_DIALOG_DATA) public editData : any,
    private dialogRef : MatDialogRef<DialogComponent>
    ){

    }

  ngOnInit(): void {
    this.fileForm = this.formBuilder.group({
      fileName : ['', Validators.required],
      quantity : ['', Validators.required],
      state : ['', Validators.required],
      date : ['', Validators.required],
      format : ['', Validators.required],
      comment : ['', Validators.required],
      file : ['', Validators.required]
    });

    if(this.editData){
      this.actionBtn = 'Actualizar'
      this.fileForm.controls['fileName'].setValue(this.editData.fileName);
      this.fileForm.controls['quantity'].setValue(this.editData.quantity);
      this.fileForm.controls['state'].setValue(this.editData.state);
      this.fileForm.controls['date'].setValue(this.editData.date);
      this.fileForm.controls['format'].setValue(this.editData.format);
      this.fileForm.controls['comment'].setValue(this.editData.comment);
      this.fileForm.controls['file'].setValue(this.editData.file);
    }
  }

  addFile(){
    if(!this.editData){
      if(this.fileForm.valid){
        this.api.postRegister(this.fileForm.value)
        .subscribe({
          next:(res)=>{
            alert("El archivo se registrado correctamente");
            this.fileForm.reset();
            this.dialogRef.close('Guardar');
          },
          error:()=>{
            alert("El archivo no se pudo registrar correctamente")
          }
        })
      }
    }else{
      this.updateFile()
    }
  }

  updateFile(){
    this.api.putFile(this.fileForm.value,this.editData.id)
    .subscribe({
      next:(res)=>{
        alert("El archivo se actualizo correctamente");
        this.fileForm.reset();
        this.dialogRef.close('Actualizar');
      },
      error:(res)=>{
        alert("El archivo no se actualizo correctamente")
      }
    })
  }

  getFile($event:any){
    const [file] = $event.target.files;
    console.log(file)
  }

}
