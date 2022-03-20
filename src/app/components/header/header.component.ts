// aquí se configura todo lo relacionado al HEADER (para usarlo, deberemos declararlo en APP.MODULE.TS)

// decorador
import { Component } from "@angular/core";

// configuración del decorador
@Component({
    
    selector: 'app-header', // nombre con el que llamaremos al componente desde el "APP.COMPONENT.HTML"
    templateUrl: './header.component.html',// importación del HTML que se llama desde el HEADER.COMPONENT.HTML
    
})

// creamos la clase
export class HeaderComponent {



}