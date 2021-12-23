import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-select-server',
  templateUrl: './select-server.component.html',
  styleUrls: ['./select-server.component.scss']
})
export class SelectServerComponent implements AfterViewInit {

  private aster = 'https://asterios.tm/index.php?cmd=rss&wnd=none&serv=0';
  a: any

  @ViewChild('frame') frame!: ElementRef;

  constructor(
    private http: HttpClient,
    private renderer: Renderer2
  ) { }

  ngAfterViewInit(): void {
    this.getServer();
  }


  private getServer(): void {
    switch (localStorage.getItem('helper-server-id')) {
      case '1' : this.getBossesFromX1();
      break;
      case '5' : this.getBossesFromX5();
      break;
      case '7' : this.getBossesFromX7();
      break;
    }
  }

  private getBossesFromX1(): void {
    // console.log(JSON.stringify('https://asterios.tm/index.php?cmd=rss&wnd=none&serv=0'));
    // console.log('ss')
    // this.http.get(this.aster)
    //   .subscribe(res => {
    //     console.log(res, 'vv')
    //   })
    // let a = $('body').text()
    // console.log(new XMLSerializer().serializeToString(document));
    // console.log(this.aster)
    // const url = new URL(
    //   'https://asterios.tm/index.php?cmd=rss&wnd=none&serv=0'
    // );
    // console.log(url); // => '?message=hello&who=world'
    // const a = document.createDocumentFragment
    // =IMPORTXML("http://comfy.ua/holodil-nik-s-nizhnej-morozilkoj-lg-ga-b419secl.html";"//title")
    // let httpRequest = new XMLHttpRequest();
    // console.log(httpRequest.responseText
  
    // const a = this.http.get('https://asterios.tm/index.php?cmd=rss&wnd=none&serv=0',{ responseType: 'text' })
    //   .subscribe(ac => {
    //     console.log(ac)
    //   },
    //   error => {
    //     console.error();

    //   }
    //   )
  
    // console.log(a)
  
  
    // const a = document.getElementById('iframeID').contentWindow.document.body.innerText
    
    setTimeout(() => {
      console.log('frame: ', this.frame.nativeElement)

      setTimeout(() => {
        const a = document.getElementById("frame")?.textContent
        console.log('a', JSON.stringify(this.frame.nativeElement));
        // const b = a?.contentWindow.document.body.innerHTML
        // console.log('b', b)
      }, 0);
    }, 3000);
    
    
  }

  private getBossesFromX5(): void {

  }

  private getBossesFromX7(): void {

  }
}


