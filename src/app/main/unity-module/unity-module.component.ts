import { Component, OnInit } from '@angular/core';

declare var UnityLoader: any;

@Component({
  selector: 'app-unity-module',
  templateUrl: './unity-module.component.html',
  styleUrls: ['./unity-module.component.scss']
})
export class UnityModuleComponent implements OnInit {
  private unityContainer: any;
  constructor() { }

  public ngOnInit() {
    this.unityContainer = UnityLoader.instantiate('unityContainer', "assets/angularUnityWebGl/angularUnityWebGl.json");
  }

}
