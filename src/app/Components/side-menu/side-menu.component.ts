import { Component } from '@angular/core';

export @Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
 class SideMenuComponent {
  userName: string="";
  theme: string="";
  widthMenu: number = 50;
  visibleMenu: boolean = true;


  alternateVisibility():void{
    this.visibleMenu=!this.visibleMenu;
  }
  setVisibility(): void{
    this.visibleMenu=!this.visibleMenu;
    }
    setTheme(color:string): void{
      this.theme=color;
      }
      sentSize():void{
        this.widthMenu+=10;
        if(this.widthMenu>100){
          this.widthMenu=50;
        }
      }
  }
  export class YourComponent {
  visibleMenu: boolean = false;

  // Alterna la visibilidad del menú y del botón
  toggleMenu() {
    this.visibleMenu = !this.visibleMenu;
  }

  // Implementa otras funciones aquí
  setTheme(color: string) {
    // Lógica para cambiar el tema
  }

  sentSize() {
    // Lógica para cambiar el tamaño
  }
}

