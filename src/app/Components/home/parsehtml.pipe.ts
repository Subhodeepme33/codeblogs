import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Pipe({
  name: 'safeHTML'
})



export class ParsehtmlPipe implements PipeTransform {

  constructor(private sanitizer:DomSanitizer){};

  transform(html:string){
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }


}
