import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DialogComponent} from './dialog/dialog.component';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

//Importanción del servicio
import {ApiService} from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'prueba';
  displayedColumns: string[] = ['fileName', 'quantity', 'state', 'date', 'format', 'comment', 'file', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    public dialog: MatDialog,
    private api : ApiService

  ){

  }
  ngOnInit(): void {
    this.getAllFles();
  }


  openDialog() {
    this.dialog.open(DialogComponent, {
      width:'35%'
    }).afterClosed().subscribe(val=>{
      if(val === 'Guardar'){
        this.getAllFles();
      }
    })
  }


  getAllFles(){
    this.api.getRegister()
      .subscribe({
        next:(res)=>{
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort
        },
        error:(err)=>{
          alert("Error al obtener los registros")
        }
      })
  }

  editFile(row : any){
    this.dialog.open(DialogComponent,{
      width: '35%',
      data:row
    }).afterClosed().subscribe(val=>{
      if(val === 'Actualizar'){
        this.getAllFles();
      }
    })
  }

  deleteFile(id:number){
    this.api.deleteFile(id)
    .subscribe({
      next:(res)=>{
        alert("El archivo se elimino correctamente");
        this.getAllFles();
      },
      error:()=>{
        alert("El archivo no se elimino correctamente")
      }
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
