import { Injectable } from '@angular/core';
import { AlertController, ToastController, NavController } from '@ionic/angular';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
import { StorageService } from './storage.service';
import { Plugins } from '@capacitor/core';
const { Device } = Plugins;

@Injectable({
  providedIn: 'root'
})

export class AlertsService {
  
  constructor(
    private alertCtrl: AlertController,
    private storage: StorageService,
    private toastController: ToastController,
    private navCtrl: NavController,
    private faio: FingerprintAIO
  ) {
    
   }
  
  public async setPass(password:any) {
    debugger;
    console.log('Set password service');
    debugger;
    console.log(password);
    this.storage.set('user_pass',password)
            this.toastInfo("Password is set , Now you can login")
            setTimeout(() => 
            {
              this.checkPass(password);
            },
            3000);
           
  }

  public async checkPass(passworda:any) {
    
            //let { password } = passworda;
            let res = await this.storage.get('user_pass');
            if (res == passworda) {
              try {
                const device = await Device.getInfo();
                if (device.platform != "web") {
                  this.faio.isAvailable().then((result: any) => {
                    this.ConfirmAIO() //Test if this phone have Biometric Hardware
                  })
                } else this.toastInfo("Biometric isn't activated, please use emulator to use this login feature")

              } catch (error) { }
              this.navCtrl.navigateForward('/home', { animated: true })
            } 
            else{
               this.toastError("Password Error")
            }
  }

  private async toastError(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 4000,
      color: 'danger',
      animated: true,
      position: 'bottom'
    });
    toast.present();
  }


  public async toastInfo(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      color: 'primary',
      animated: true,
      position: 'bottom'
    });
    toast.present();
  }

  private async ConfirmAIO() {
    const alert = await this.alertCtrl.create({
      header: 'Dear User',
      message: 'Do you want to use Biometric Authentication?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'primary',
          handler: async (c) => { }
        }, {
          text: 'Yes',
          handler: async (o) => {
            await this.storage.set('biometric', "true");
            this.toastInfo("Now you can use Biometric")
          }
        }
      ]
    });

    await alert.present();
  }

  public async fingerPrintAIO() {

    this.faio.isAvailable().then((result: any) => {
      this.faio.show({
        title: 'Enter phone PIN, password or fingerprint',
        subtitle: 'Unlock Voya-EB',
        disableBackup: true,
      }).then((res: any) => {
        this.navCtrl.navigateForward('/home', { animated: true })
        return true
      }).catch((error: any) => {
        this.toastError(error.message)
        return false
      })
    }).catch((error: any) => {
      this.toastError("This phone don't have biometric hardware or it is deactivated, please check it")
    });


  }
}
