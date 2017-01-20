import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()

export class GithubService {

  private username: string;

  private client_id = 'your_client_id';
 private client_secret = 'your_client_github';


  constructor(private _http: Http){
    console.log('Github Service ready...');
    this.username='omarsallah00';
  }

  getUser(){
    return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret).map(res=>res.json());
  }

  getRepos(){
    return this._http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret).map(res=>res.json());
  }

  updateUser(username:string){
    this.username=username;
  }
}

