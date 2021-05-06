import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { SincronizacionService } from 'src/app/servicios/sincronizacion.service';

@Component({
  selector: 'app-sincronizacion',
  templateUrl: './sincronizacion.component.html',
  styleUrls: ['./sincronizacion.component.css']
})
export class SincronizacionComponent implements OnInit {

  loanding : boolean;
  estadoSincronizacion : string = "Sincronizando... puede tardar un poco"

  @ViewChild("detalles", {static: false}) contenidoDelModal: TemplateRef<any>;
  ngAfterViewInit() {
      this.MostrarModal();
  }

  constructor(public sin : SincronizacionService,public modal : NgbModal, private spinner: NgxSpinnerService) { }

  MostrarModal() {
    this.modal.open(this.contenidoDelModal, { size: 'lg', backdrop: 'static', keyboard: false });
  }

  ngOnInit() {

    this.spinner.show()
    this.sin.sincronizar().subscribe(req => {
      this.estadoSincronizacion = req.mensaje;
      this.spinner.hide();

    }, error => {
      alert("Ocurrio algo inesperado");
      console.log(error.mensaje)
      this.spinner.hide();
    }, () => this.loanding = false)
  }

}
