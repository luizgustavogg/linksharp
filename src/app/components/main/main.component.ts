import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // 🔥 ESSE É O MILAGRE
import { BackendService } from '../../../services/backend.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule], // 👈 ADICIONA AQUI
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  urlOriginal: String = '';
  shortCode: String = '';

  showPopup: boolean = false; // flag pra abrir/fechar o pop-up
  popupMessage: string = ''; // o que tu quer mostrar dentro do pop-up
  popupMessageLink: string = ''; // o que tu quer mostrar dentro do pop-up

  showToast: boolean = false; // pop-up confirmando cópia

  showErrorPopup: boolean = false;
  errorMessage: string = '';

  constructor(private createLinkService: BackendService) {}

  clickCreateLink(event: Event) {
    event.preventDefault();

    this.createLinkService
      .createLink(this.urlOriginal, this.shortCode)
      .subscribe(
        (response) => {
          this.popupMessage = `Link criado com sucesso!`;
          this.popupMessageLink = `localhost:3000/${response.shortCode}`;
          this.showPopup = true;
        },
        (error) => {
          this.errorMessage = `Erro: ${
            error.error?.message || 'Não foi possível criar o link.'
          }`;
          this.showErrorPopup = true;
        }
      );

    console.log('clickCreateLink funcionou');
  }

  closePopup() {
    this.showPopup = false;
  }

  closeErrorPopup() {
    this.showErrorPopup = false;
  }

  copyToClipboard(text: string) {
    navigator.clipboard.writeText(text).then(() => {
      this.showToast = true;
      setTimeout(() => (this.showToast = false), 4000);
      setTimeout(() => (this.createLinkService.redirectionUser("http://"+text)), 1000);
      
    });
  }
}
