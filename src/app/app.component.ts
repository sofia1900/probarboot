import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  celdas = [["PRIMER", "SEGUND"], ["TERCER", "CUART"]]
  mostrarOcultar (celda:string){
    let parrafo = document.getElementById(celda)
    let visible = parrafo!!.style.display
    if (visible == 'none'){
      parrafo!!.style.display = 'block'
    }else{
      parrafo!!.style.display = 'none'
    }
  }
}
