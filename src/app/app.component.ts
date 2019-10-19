import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Angular Popup</h1>

    <div class="popup" *ngIf="isShow">
      <h1>Angular Popup</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
      <button class="btn-close" (click)="isShow = !isShow">X</button>
      <input type="text">
      <button class="btn-ok">OK</button>
      <button class="btn-cancel" (click)="isShow = !isShow">Cancel</button>
    </div>
    <div class="overlay" *ngIf="isShow"></div>

    <button class="toggle-popup" (click)="isShow = !isShow">show popup</button>

    <p class="popup-message"></p>
  `,
  styles: [`
    h1 {
      color: #DB5B33;
      font-weight: 300;
      text-align: center;
    }
    .is-show {
      display: block !important;
    }
    .popup {
      position: absolute;
      top: 20px;
      left: 50%;
      -webkit-transform: translateX(-50%);
      -moz-transform: translateX(-50%);
      -ms-transform: translateX(-50%);
      -o-transform: translateX(-50%);
      transform: translateX(-50%);
      z-index: 2;
      width: 700px;
      padding: 15px;
      background-color: #FFF;
      -webkit-box-shadow: 0 15px 30px 0 rgba(0, 0, 0, .5);
      -moz-box-shadow: 0 15px 30px 0 rgba(0, 0, 0, .5);
      box-shadow: 0 15px 30px 0 rgba(0, 0, 0, .5);
    }
    .btn-close {
      position: absolute;
      top: 15px;
      right: 15px;
      background: transparent;
      border: none;
      cursor: pointer;
    }
    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1;
      background-color: rgba(0, 0, 0, .3);
    }
    .toggle-popup, .btn-ok, .btn-cancel {
      cursor: pointer;
    }
  `]
})
export class AppComponent {
  isShow = false;

  togglePopup() {

  }
}
