import { Component, OnInit, OnDestroy} from '@angular/core';
import {UnlessDirective} from "./unless.directive";

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [UnlessDirective]
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'iva';

  names:Array<string> = [];

  constructor(){

  }

  ngOnInit():any {
    alert('criou!');
  }

  ngOnDestroy():any{
    alert('destruiu!');
  }

  onKeyup(valorInput:string){
    //alert("key up "+valorInput);
    this.title = valorInput;

    this.names.push(valorInput);
  }
}
