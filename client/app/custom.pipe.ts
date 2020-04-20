import { 
    Pipe, 
    PipeTransform 
 } from '@angular/core';  
 
 @Pipe ({ 
    name: 'Custom' 
 }) 
 
 export class CustomPipe implements PipeTransform { 
    transform(value: number, multiply: string): number { 
       let mul = parseFloat(multiply); 
       return mul * value 
    } 
 } 