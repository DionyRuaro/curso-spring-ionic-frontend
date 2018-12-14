import { Component } from '@angular/core';
import { NavController, IonicPage, MenuController } from 'ionic-angular';
import { CredenciaisDTO } from '../../models/Credenciais.dto';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  creds : CredenciaisDTO = {
    email : "",
    senha : ""
  }

  constructor(public navCtrl: NavController, public menu: MenuController) { 
  }

  login(){
    //Empilha a página
    //this.navCtrl.push('CategoriasPage');
    console.log(this.creds);
    this.navCtrl.setRoot('CategoriasPage');
  }

  ionViewWillEnter() { 
    this.menu.swipeEnable(false); 
  }

  ionViewDidLeave() { 
    this.menu.swipeEnable(true); 
  }
}
