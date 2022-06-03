import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VisitaService } from '../service/visita.service';
import { ToastController } from '@ionic/angular';
import { Visita } from '../models/visita';

@Component({
  selector: 'app-actu-visita',
  templateUrl: './actu-visita.page.html',
  styleUrls: ['./actu-visita.page.scss'],
})
export class ActuVisitaPage implements OnInit {

  visit:Visita;

  constructor(private service:VisitaService,private actroute: ActivatedRoute, 
    private router:Router, 
    private toast: ToastController) {
      this.actroute.queryParams.subscribe(
        params=>{
          if(params && params.special){
            this.visit=JSON.parse(params.special) as Visita;
            console.log(this.visit)
          }
        }
      );
     }

  ngOnInit() {
  }

  onHome(){
    this.router.navigateByUrl('/home')
  }

}
