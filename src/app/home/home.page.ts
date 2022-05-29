import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from './../service/auth.service';
import { Component } from '@angular/core';
import { Visita } from '../models/visita';
import { VisitaService } from '../service/visita.service';
import {Router, NavigationExtras} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public visit:Visita[];
  
  constructor(private service:VisitaService,private router:Router,private afAuth:AngularFireAuth) {
    this.service.getVisita().subscribe(data=>{
      this.visit=data.map(e=>{
        return{
          id:e.payload.doc.id,
          ...e.payload.doc.data() as Visita
        };
      })
      console.log(this.visit);
    });
  }
  onLogout(){
    console.log('Logout');
    this.afAuth.signOut();
    this.router.navigateByUrl('/login')
  }

  detail(visit:Visita){
    let navext: NavigationExtras={
      queryParams:{
        special: JSON.stringify(visit)
      }
    };
    this.router.navigate(['/detail'],navext);
  }

  onCrearVisita(){
    this.router.navigateByUrl('/new-visita');
  }
}
