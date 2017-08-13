import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {
  public track = [];
  transform(value: any, args?: any): any {
                  console.log(value);
                  console.log(args);
                  
                  if((args?args[1]:false) == true){
                    if(value && args){
                        value.forEach(element => {
                            element.brand == args[0]? this.track.push(element):null;
                        });
                    }
                      return this.track;
                  }else if((args?args[1]:true) == false){
                    for(let i=0;i<=this.track.length-1;i++){
                            if(this.track[i].brand == args[0]){
                              this.track.splice(i,1);
                              i--;
                            }
                       }
                    if(this.track.length >= 1){
                      return this.track;
                    }else{
                      return value;
                    }
                  }else{
                      return value && args? value.filter(product => product.brand == args[0]):value;
                  }
  }


}
