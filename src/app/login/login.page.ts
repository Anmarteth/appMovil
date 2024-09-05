import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username:string=""
  password:string=""
  constructor(public alerta:AlertController, public toast:ToastController, private router:Router) { }

  ngOnInit() {
  }
  async mensajeCorrecto() {
    const toast = await this.toast.create({
      message: 'Inicio de sesion correcto',
      duration: 2000
    });
    toast.present();
  }
  async mensajeError() {
    const alert = await this.alerta.create({
      header: 'Error de inicio',
      message: 'No puede ingresar con campos vacios',
      buttons: ['Aceptar']
    });
  
    await alert.present();
  }
  ingresar(){
    if(this.username===""||this.password===""){
      console.log("no puede haber valores vacios")
      this.mensajeError()
    }

    else{
      console.log("inicio exitoso")
      this.mensajeCorrecto()
      this.router.navigate(["/home"])
    }
  }
}