import {Component} from '@angular/core';

@Component({
    selector:'mb-app',
    templateUrl:'./app.component.html',
    styleUrls:['./app.component.css']
})

export class AppComponent{
    firstBlogItem={
        title:"If you loved The Silent Patient, check out these thrillers",
        date:"April 06, 2020",
        content:"What did you love about The Silent Patient? For me, it was the 'relationship' between criminal psychotherapist Theo Faber and his silent patient. Psychotherapists, psychologists, and psychiatrists: there's just something about them that adds that something extra to a thriller for me. Perhaps it's because they aren't as naturally cynical or suspicious as detectives. They're like a stand-in for the reader, willing to follow their patient down the rabbit hole to find the killer, and maybe apt to be taken in by a criminal mastermind. Or in the case of one of the titles on this list, they may even be the criminal mastermind. If you read and loved The Silent Patient, here are a few psychological thrillers you may enjoy.",
        author:"Vannessa Cronin",
        isFavorite:false
    };

    onBlogItemDelete(blogItem){}
} 