import { Component } from '@angular/core';
import { User } from './users';

@Component ({
    selector: 'reg_form',
    templateUrl: './app/register.component.html'
})

export class RegFormComponent {
    user = new User('ojas', 'ojas123', 9876543212, 'ojas.kapre@somaiya.edu')
    submitted = false;
    onSubmit() { this.submitted = true; }
}