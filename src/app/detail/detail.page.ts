import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VisitaService } from '../service/visita.service';
import { ToastController } from '@ionic/angular';
import { Visita } from '../models/visita';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

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

  delete(id){
    console.log(id)
    this.service.deleteVisita(id);
    this.presentToast();
  }

  async presentToast(){
    const t = await this.toast.create({
      message:'Visita Eliminada',
      duration: 2000
    });
    t.present();
  }

  onHome(){
    this.router.navigateByUrl('/home')
  }
}
