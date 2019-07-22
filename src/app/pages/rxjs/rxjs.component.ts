

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable,Subscription } from 'rxjs';
import 'rxjs/Rx';




@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit,OnDestroy {

  //
  subscription: Subscription;

  constructor() {
    // .retry intente hacerlo otra vez
    this.subscription = this.regresaObservable()
        // .retry(2)
        .subscribe(
                  numero => console.log('Subs', numero),
                  error => console.log('Error en el obs dos veces', error),
                  () => console.log('El observador termino!')
         );

  }

  ngOnInit() {
  }
  ngOnDestroy(){
    console.log('la pagina se va a cerrar!');
    this.subscription.unsubscribe();
  }
  regresaObservable(): Observable<any> {
   return new Observable( observer => {
      // tslint:disable-next-line: no-unused-expression
        let  contador  = 0;
        const intervalo = setInterval(() => {
         contador += 1;

         let salida = {
           valor: contador
         };
         // el observable notifica que llego 1, 2,3, etc
         observer.next(salida);
         //if (contador === 3) {
         //    clearInterval(intervalo);
         //    observer.complete();
         //}
        //  if(contador === 2) {
        //     observer.error('Auxilio!');
        //  }

       }, 500);
    }).retry(2)
      .map( (resp : any)=> {
       return resp.valor;
      })
      //aqui ya esta obtenido el valor por eso utilizamos filter
      .filter((valor,index) => {
        ///console.log(valor);
        if( (valor % 2) === 1)
        {
        // impar
        return true;
        } else {
        // par
        return false;
        }
      });
  }

}
