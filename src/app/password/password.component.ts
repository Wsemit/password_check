import { Component } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent {
  password: string = '';
  colorSection1: string = 'gray';
  colorSection2: string = 'gray';
  colorSection3: string = 'gray';

  calculateStrength(): void {
    const passwordLength = this.password.length;
    const hasLetters = /[a-zA-Z]/.test(this.password);
    const hasNumbers = /\d/.test(this.password);
    const hasSymbols = /[!@#$%^&*()]/.test(this.password);

    if (passwordLength === 0) {
      this.colorSection1 = 'gray';
      this.colorSection2 = 'gray';
      this.colorSection3 = 'gray';
    } else if (passwordLength < 8) {
      this.colorSection1 = 'red';
      this.colorSection2 = 'gray';
      this.colorSection3 = 'gray';
    } else if ((hasLetters || hasNumbers || hasSymbols) && !(hasLetters && hasNumbers && hasSymbols)) {
      this.colorSection1 = 'yellow';
      this.colorSection2 = 'yellow';
      this.colorSection3 = 'gray';
    } else if (hasLetters && hasNumbers && hasSymbols) {
      this.colorSection1 = 'green';
      this.colorSection2 = 'green';
      this.colorSection3 = 'green';
    } else {
      this.colorSection1 = 'red';
      this.colorSection2 = 'gray';
      this.colorSection3 = 'gray';
    }
  }
}
