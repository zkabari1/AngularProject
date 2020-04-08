import {Injectable} from '@angular/core';
@Injectable({
    providedIn:'root'
})
export class BlogItemService{
    blogItems=[
        {
            id:1,
            title:"If you loved The Silent Patient, check out these thrillers",
            date:"April 06, 2020",
            content:"What did you love about The Silent Patient? For me, it was the 'relationship' between criminal psychotherapist Theo Faber and his silent patient. Psychotherapists, psychologists, and psychiatrists: there's just something about them that adds that something extra to a thriller for me. Perhaps it's because they aren't as naturally cynical or suspicious as detectives. They're like a stand-in for the reader, willing to follow their patient down the rabbit hole to find the killer, and maybe apt to be taken in by a criminal mastermind. Or in the case of one of the titles on this list, they may even be the criminal mastermind. If you read and loved The Silent Patient, here are a few psychological thrillers you may enjoy.",
            author:"Vannessa Cronin",
            genre:"Romance",
            isFavorite:false
        },
        {
            id:2,
            title:"On the podcast: we recommend recent books + a conversation with Goodreads",
            date:"April 06, 2020",
            content:"At the beginning of March, we recorded two podcasts that would take us through the month we thought we would be working from home. This is the second of those podcasts, one we called Before and After: Recent and Near-Future Books that We Loved. I noticed that there is a fair dose of mysteries and thrillers on the list. You can see all the books we talked about below.",
            author:"Chris Schluep",
            genre:"Inspirational",
            isFavorite:true
        },
        {
            id:3,
            title:"For the love of siblings: to celebrate National Siblings Day, here are some of our favorite literary brothers and sisters",
            date:"April 06, 2020",
            content:"While many will likely be separated from their brothers and sisters on National Siblings Day this Friday, we wanted to take a minute to celebrate the bond, the complexity, the exasperation, and joy of siblings. As Zadie Smith wrote in her dazzling novel On Beauty: “People talk about the happy quiet that can exist between two loves, but this, too, was great; sitting between his sister and his brother, saying nothing, eating… He did not consider if or how or why he loved them. They were just love: they were the first evidence he ever had of love, and they would be the last confirmation of love when everything else fell away.”",
            author:"Al Woodworth",
            genre:"Action",
            isFavorite:false
        }
    ];
    get() {
        return this.blogItems;
      }
    
      add(blogItem) {
        this.blogItems.push(blogItem);
      }
    
      delete(blogItem) {
        const index = this.blogItems.indexOf(blogItem);
        if (index >= 0) {
          this.blogItems.splice(index, 1);
        }
      }
}