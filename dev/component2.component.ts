/**
 * Created by Iulian on 26/06/16.
 */
import {Component} from 'angular2/core';
import {Router, CanDeactivate} from "angular2/router";

@Component({
  template:`
    <h2>This is component 2</h2>
    <button (click)="onNavigate()">Take me to Component 1</button>
  `,
})

export class Component2Component implements CanDeactivate{
  constructor(private _router: Router){}

    onNavigate(){
      this._router.navigate(['Component1', {source: 'Component2'}]);
    }

  routerCanDeactivate(nextInstruction:ComponentInstruction,
                      prevInstruction:ComponentInstruction):any{
    return alert("Sure ?");
  }
}
