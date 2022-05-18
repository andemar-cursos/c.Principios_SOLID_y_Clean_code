// import axios from 'axios';
import { HtttpClient } from './02-open-close-c';

export class TodoService {

    constructor(private http: HtttpClient) {}

  async getTodoItems() {
    const { data } = await this.http.get('https://jsonplaceholder.typicode.com/todos/');
    return data;
  }
}

export class PostService {

    constructor(private http: HtttpClient) {}

  async getPosts() {
    const { data } = await this.http.get('https://jsonplaceholder.typicode.com/posts');
    return data;
  }
}

export class PhotosService {

    constructor(private http: HtttpClient) {}

  async getPhotos() {
    const { data } = await this.http.get('https://jsonplaceholder.typicode.com/photos');
    return data;
  }
}
