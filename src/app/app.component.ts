import { Component} from '@angular/core';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  
  //document.cookie = "username=John Doe";
  get() {
  	Cookie.set('name', 'this is a cookie');
  let myCookie = Cookie.get('name');
  Cookie.set('name', 'this is a cookie', 10 /*days from now*/);
   //console.log(document.cookie);
  console.log("cookie "+myCookie);
  console.log("in cookie");
  }

    start2() {
    Cookie.set('name', 'this is a cookie');
  let myCookie = Cookie.get('name');
  Cookie.set('name', 'this is a cookie', 10 /*days from now*/);
   //console.log(document.cookie);
  console.log("cookie "+myCookie);
  console.log("in cookie");
  }


    // get mobile opertaing system
  getMobileOperatingSystem() {
      // Android detection
      if (navigator.userAgent.match(/Android/i)) {
          return "Android";
      }
      // iOS detection
      if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
          return "iOS";
      }
      return "unknown";
   }

   // start application
  start(){
      let hidden;
      let ios = false;
      let isSafari = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/);

   // case non safari
    if(!isSafari){
      console.log("non safari");
       window.open('tf1conso://');
      setTimeout(() => {
        if(window.document.visibilityState == "hidden"){
          hidden = true;
        }else{
           this.toStore();
        }           
// document.getElementById("a-id").click();
         
  
      }, 2000);
     
    }
   // case safari
    if(isSafari){
       // always redirect to store
       this.toStore();
    }
  }

    // download application
  toStore() {
      let os = this.getMobileOperatingSystem();
      // go to google store
      if(os == "Android"){
         window.open("https://play.google.com/store/apps/details?id=fr.tf1.tf1conso&hl=en");
      }
      // go to app store
      if(os == "iOS"){
        window.open("https://itunes.apple.com/fr/app/tf1-conso-coupons-reduction/id977958337?mt=8");
      }
  }

}
