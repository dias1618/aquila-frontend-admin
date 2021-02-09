import { Injectable } from '@angular/core';

@Injectable()
export class SessionService{

    get usuario(){
        try {
            if (sessionStorage.getItem('usuario'))
                return JSON.parse(sessionStorage.getItem('usuario'));
            else
                return null;
        } catch (e) {
            console.log(e);
        }
    }

    setValue(name: string, value: any): void {
        sessionStorage.setItem(name, value);
    }

    getValue(name: any): any {
        return sessionStorage.getItem(name);
    }

}