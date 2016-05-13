import { Component} from '@angular/core'
import { Flug } from './flug';
import { Http, URLSearchParams, Headers } from '@angular/http';

@Component({
    selector: 'flug-suchen',
    templateUrl: 'app/flug-suchen.component.html'
})
export class FlugSuchen {
    
    public von: string;
    public nach: string;
 
    public fluege: Array<Flug> = [];
    
    public selectedFlug: Flug;
    
    /*    
    private http: Http;
    
    constructor(http: Http) {
        this.http = http;
    }
    */
    constructor(
        private http: Http) {
    }
    
    public suchen(): void {
        
        var url = "http://www.angular.at/api/flug";
        
        var search = new URLSearchParams();
        search.set('abflugort', this.von);
        search.set('zielort', this.nach);
        
        var headers = new Headers({
           'Accept': 'text/json' 
        });
        
        this.http
            .get(url, { search, headers })
            .map(resp => resp.json())
            .subscribe(
              (fluege: Flug[]) => {
                this.fluege = fluege;  
              },
              (err) => {
                   console.error(err);
              }  
            );
    }
    
    public select(flug: Flug): void {
        this.selectedFlug = flug;
    }
}