import { Component, OnInit } from '@angular/core';
import { autor } from 'src/app/modelos/autor';
import { AutorService } from 'src/app/servicios/autor.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.css']
})
export class AutoresComponent implements OnInit {

  lstAutoresTotal : Array<autor>
  lstAutores : Array<autor>

  loanding : boolean
  Filtro: string;
  hoy: Date = new Date();
  fechaInicio: Date;
  fechaFin: Date;
  info : boolean = false;

  p: number = 1;

  constructor(public ser : AutorService, private spinner: NgxSpinnerService) { 
    this.lstAutores = new Array<autor>();
  }

  ngOnInit() {
    this.ObtenerAutores();
  }

  ObtenerAutores(){
    this.spinner.show();
    debugger
    this.ser.ObtenerAutores().subscribe(a => {     
      
      if (a.length > 0)
      {
        this.lstAutores = a;
        this.lstAutoresTotal = a;
      } else {
        alert("No se encontraron datos, por favor realizar sincronizacion");
      }
      this.spinner.hide()
    }, error => {
      alert("Ocurrio algo inesperado");
      console.log(error.mensaje)
      this.spinner.hide()
      this.loanding = false;      
    }, () => this.loanding = false)
  }

  buscarfiltro(){
    debugger
    if (this.fechaInicio == undefined || this.fechaFin == undefined || this.Filtro == "" || this.Filtro == undefined)
    {
      alert("Seleccione las fechas por favor y/o campo de busqueda");
    } 
    else 
    {
      if (this.fechaInicio > this.fechaFin){
        alert("La fecha inicial no puede ser mayo a la fecha final");
      } else {
        this.spinner.show()
        this.ser.ObtenerAutoresFiltro(this.Filtro, this.fechaInicio, this.fechaFin).subscribe(a => {      
          this.lstAutores = a;
          this.p = 1;
          this.spinner.hide()
        }, error => {
          alert("Ocurrio algo inesperado");
          console.log(error.mensaje)
          this.spinner.hide()
        }, () => this.loanding = false)
      }
    }
  }

  RestablecerListaAutores(){
      this.lstAutores = this.lstAutoresTotal;
  }

  Info(){
    this.info = !this.info;
  }



}
