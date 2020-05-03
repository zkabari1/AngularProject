import {
  HttpEvent,
  HttpRequest,
  HttpResponse,
  HttpBackend,
} from "@angular/common/http";
import { Observable, Observer } from "rxjs";
import * as data from "./data.json";

export class MockXHRBackend implements HttpBackend {
  private blogItems: any = (data as any).default;
  ngOnInit() {
    console.log(this.blogItems);
  }
  /*    this.httpClient.get("data.json").subscribe((data) => {
      this.blogItems = data;
    });
  */
  handle(request: HttpRequest<any>): Observable<HttpEvent<any>> {
    return new Observable((responseObserver: Observer<HttpResponse<any>>) => {
      let responseOptions;
      switch (request.method) {
        case "GET":
          if (
            request.urlWithParams.indexOf("blogItems?category=") >= 0 ||
            request.url === "blogItems"
          ) {
            let category;
            if (request.urlWithParams.indexOf("?") >= 0) {
              category = request.urlWithParams.split("=")[1];
              if (category === "undefined") {
                category = "";
              }
            }
            let blogItems;
            if (category) {
              blogItems = this.blogItems.filter((i) => i.category === category);
            } else {
              blogItems = this.blogItems;
            }
            responseOptions = {
              body: { blogItems: JSON.parse(JSON.stringify(blogItems)) },
              status: 200,
            };
          } else {
            let blogItems;
            const idToFind = parseInt(request.url.split("/")[1], 10);
            blogItems = this.blogItems.filter((i) => i.id === idToFind);
            responseOptions = {
              body: JSON.parse(JSON.stringify(blogItems[0])),
              status: 200,
            };
          }
          break;
        case "POST":
          const blogItem = request.body;
          blogItem.id = this._getNewId();
          this.blogItems.push(blogItem);
          responseOptions = { status: 201 };
          break;
        case "DELETE":
          const id = parseInt(request.url.split("/")[1], 10);
          this._deleteblogItem(id);
          responseOptions = { status: 200 };
      }

      const responseObject = new HttpResponse(responseOptions);
      responseObserver.next(responseObject);
      responseObserver.complete();
      return () => {};
    });
  }

  _deleteblogItem(id) {
    const blogItem = this.blogItems.find((i) => i.id === id);
    const index = this.blogItems.indexOf(blogItem);
    if (index >= 0) {
      this.blogItems.splice(index, 1);
    }
  }

  _getNewId() {
    if (this.blogItems.length > 0) {
      return (
        Math.max.apply(
          Math,
          this.blogItems.map((blogItem) => blogItem.id)
        ) + 1
      );
    } else {
      return 1;
    }
  }
}
