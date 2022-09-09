import { Component } from '@angular/core';
import { Registration } from './models';
import { RegistrationService } from './services/registrationService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day34';

  constructor(private registrationSvc: RegistrationService) { }

  processNewRegistration(newRegistration: Registration) {
    console.info('>>>> New registration: ', newRegistration)
    this.registrationSvc.newRegistration(newRegistration)
      .then(result => {
        console.info('>>>> Result: ', result)
      })
      .catch(error => {
        console.error('>>>> error: ', error)
      })
  }
}
