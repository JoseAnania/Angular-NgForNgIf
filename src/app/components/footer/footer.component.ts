// aquí se configura todo lo relacionado al FOOTER (para usarlo, deberemos declararlo en APP.MODULE.TS)

// decorador
import { Component } from '@angular/core';

// configuración del decorador
@Component({
  selector: 'app-footer', // nombre con el que llamaremos al componente desde el "APP.COMPONENT.HTML"
  templateUrl: './footer.component.html', // importación del HTML que se llama desde el FOOTER.COMPONENT.HTML
})

// creamos la clase
export class FooterComponent {

    anio: number; // creamos una variable del tipo number que se usará en el FOOTER

    // constructor de la clase
    constructor() {

      this.anio = new Date().getFullYear(); // le asignamos el valor del año en curso

    }
}
