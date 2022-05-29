import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators} from '@angular/forms';
import { Visita } from 'src/app/models/visita';
import { VisitaService } from 'src/app/service/visita.service';
import {Router, NavigationExtras} from '@angular/router';
import { IonDatetime } from '@ionic/angular';
import { format, parseISO} from 'date-fns';

@Component({
  selector: 'app-new-visita',
  templateUrl: './new-visita.page.html',
  styleUrls: ['./new-visita.page.scss'],
})
export class NewVisitaPage implements OnInit {

dateValue='';

  public myform:FormGroup;
  public visit:Visita;

  constructor(private visitService:VisitaService, private fb:FormBuilder,private router:Router) { }

  formatDate(value: string) {
    return format(parseISO(value), 'dd/MMM/yyyy');
  }

  ngOnInit() {
    this.myform=this.fb.group({
      Direccion: [""],
    Estacion: [""],
    Fecha: [""],
    Hora_Entrada: [""],
    Hora_Salida: [""],
    Matricula: ["",Validators.required],
    Motivo_visita: [""]
    });
  }

  create(){
    this.visit={
      Direccion:this.myform.controls.Direccion.value,
      Estacion:this.myform.controls.Estacion.value,
      Fecha:this.myform.controls.Fecha.value,
      Hora_Entrada:this.myform.controls.Hora_Entrada.value,
      Hora_Salida:this.myform.controls.Hora_Salida.value,
      Matricula:this.myform.controls.Matricula.value,
      Motivo_visita:this.myform.controls.Motivo_visita.value,
    }
    this.visitService.createVisita(this.visit);
    this.router.navigateByUrl('/home');
  }

  onHome(){
    this.router.navigateByUrl('/home');
  }


}
