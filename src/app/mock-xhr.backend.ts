import { HttpEvent, HttpRequest, HttpResponse, HttpBackend } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';

export class MockXHRBackend implements HttpBackend {
    private blogItems=[
        {
            id:1,
            title:"If you loved The Silent Patient, check out these thrillers",
            date:"October 17, 2012",
            content:"What did you love about The Silent Patient? For me, it was the 'relationship' between criminal psychotherapist Theo Faber and his silent patient. Psychotherapists, psychologists, and psychiatrists: there's just something about them that adds that something extra to a thriller for me. Perhaps it's because they aren't as naturally cynical or suspicious as detectives. They're like a stand-in for the reader, willing to follow their patient down the rabbit hole to find the killer, and maybe apt to be taken in by a criminal mastermind. Or in the case of one of the titles on this list, they may even be the criminal mastermind. If you read and loved The Silent Patient, here are a few psychological thrillers you may enjoy.",
            author:"Vannessa Cronin",
            category:"Romance",
            isFavorite:false
        },
        {
            id:2,
            title:"On the podcast: we recommend recent books + a conversation with Goodreads",
            date:"April 06, 2020",
            content:"At the beginning of March, we recorded two podcasts that would take us through the month we thought we would be working from home. This is the second of those podcasts, one we called Before and After: Recent and Near-Future Books that We Loved. I noticed that there is a fair dose of mysteries and thrillers on the list. You can see all the books we talked about below.",
            author:"Chris Schluep",
            category:"Educational",
            isFavorite:true
        },
        {
            id:3,
            title:"For the love of siblings: to celebrate National Siblings Day, here are some of our favorite literary brothers and sisters",
            date:"May 10, 2018",
            content:"While many will likely be separated from their brothers and sisters on National Siblings Day this Friday, we wanted to take a minute to celebrate the bond, the complexity, the exasperation, and joy of siblings. As Zadie Smith wrote in her dazzling novel On Beauty: “People talk about the happy quiet that can exist between two loves, but this, too, was great; sitting between his sister and his brother, saying nothing, eating… He did not consider if or how or why he loved them. They were just love: they were the first evidence he ever had of love, and they would be the last confirmation of love when everything else fell away.”",
            author:"Al Woodworth",
            category:"Action",
            isFavorite:false
        }
    ];
    
  handle(request: HttpRequest<any>): Observable<HttpEvent<any>> {
    return new Observable((responseObserver: Observer<HttpResponse<any>>) => {
      let responseOptions;
      switch (request.method) {
        case 'GET':
          if (request.urlWithParams.indexOf('blogItems?category=') >= 0 || request.url === 'blogItems') {
            let category;
            if (request.urlWithParams.indexOf('?') >= 0) {
              category = request.urlWithParams.split('=')[1];
              if (category === 'undefined') { category = ''; }
            }
            let blogItems;
            if (category) {
              blogItems = this.blogItems.filter(i => i.category === category);
            } else {
              blogItems = this.blogItems;
            }
            responseOptions = {
              body: {blogItems: JSON.parse(JSON.stringify(blogItems))},
              status: 200
            };
          } else {
            let blogItems;
            const idToFind = parseInt(request.url.split('/')[1], 10);
            blogItems = this.blogItems.filter(i => i.id === idToFind);
            responseOptions = {
              body: JSON.parse(JSON.stringify(blogItems[0])),
              status: 200
            };
          }
          break;
        case 'POST':
          const blogItem = request.body;
          blogItem.id = this._getNewId();
          this.blogItems.push(blogItem);
          responseOptions = {status: 201};
          break;
        case 'DELETE':
          const id = parseInt(request.url.split('/')[1], 10);
          this._deleteblogItem(id);
          responseOptions = {status: 200};
      }

      const responseObject = new HttpResponse(responseOptions);
      responseObserver.next(responseObject);
      responseObserver.complete();
      return () => {
      };
    });
  }

  _deleteblogItem(id) {
    const blogItem = this.blogItems.find(i => i.id === id);
    const index = this.blogItems.indexOf(blogItem);
    if (index >= 0) {
      this.blogItems.splice(index, 1);
    }
  }

  _getNewId() {
    if (this.blogItems.length > 0) {
      return Math.max.apply(Math, this.blogItems.map(blogItem => blogItem.id)) + 1;
    } else {
      return 1;
    }
  }
}