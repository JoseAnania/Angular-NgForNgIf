// aquí se configura todo lo relacionado al BODY (para usarlo, deberemos declararlo en APP.MODULE.TS)

// decorador
import { Component } from "@angular/core";

// configuración del decorador
@Component({
    
    selector:'app-body', // nombre con el que llamaremos al componente desde el "APP.COMPONENT.HTML"
    templateUrl:'./body.component.html', // importación del HTML que se llama desde el BODY.COMPONENT.HTML

})

// creamos la clase
export class BodyComponent {

    // creamos propiedades, por ejemplo mostrar u ocultar la CARD (según funcionalidad del NG IF)
    mostrar = true;

    // creamos propiedades, por ejemplo un mensaje del tipo ANY
    frase: any = {

        mensaje: 'You only live one',
        autor: 'Julián Casablanca',
    };

    // creamos propiedades, por ejemplo un arreglo (según funcionalidad del NG FOR)
    cantantes: string[] = ['Mick Jagger', 'Eddie Vedder', 'Kurt Cobain', 'Anthony Kiedis'];

}