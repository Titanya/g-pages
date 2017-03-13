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
    //   window.open('tf1conso://'); app masbouba imchi w may7ilich store
 let page =  window.open('tf1conso://');
  /// let page =  window.open('http://www.google.com');
  // let page =  window.open('https://www.w3schools.com/');
   //page.document.body.style.backgroundColor = "red";
  let bodyStyle = window.getComputedStyle(page.document.body, null);
   let bgColor = bodyStyle.backgroundColor;
   let hex = this.rgb2hex(bgColor);
   console.log("body color "+ this.rgb2hex(bgColor));


(page, function() {
      setTimeout(() => {
        if(hex ==  '#000000'){
          console.log("abyadh");
          page.window.location.replace("https://play.google.com/store/apps/details?id=fr.tf1.tf1conso&hl=en");
     
        }             
     }, 1000);
  });
    }
   // case safari
    if(isSafari){
     console.log("safari");
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

//Function to convert hex format to a rgb color
rgb2hex(rgb){
 rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
 return (rgb && rgb.length === 4) ? "#" +
  ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
}

}
