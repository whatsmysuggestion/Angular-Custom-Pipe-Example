import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

transform(data: string): string {
	console.log(data);
     if(data=="male")
		 return "Welcome Mr"
  	 else
		 return "Welcome Mrs"
  	
  }
}
