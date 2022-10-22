import { Component, OnInit, Renderer2  } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private renderer: Renderer2) { 
    renderer.setStyle(
      document.body,
      "background-image",
      'url(../assets/img/running-girl.png)'
    );
  }

  ngOnInit(
    
  ) {
  }

}
