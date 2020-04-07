import {Directive, HostBinding, Input, HostListener} from '@angular/core';

@Directive({
    selector:'[mbFavorite]'
})

export class FavoriteDirective{
    @HostBinding('class.is-favorite') isFavorite = true;
    @HostBinding('class.is-favorite-hovering') hovering=false;
    @HostListener('mouseenter') onMouseEnter(){
        this.hovering=true;
    }
    @HostListener('mouseleave') onMouseLeave(){
        this.hovering=false;
    }
    
    @Input() set mbFavorite(value){
        this.isFavorite=value;
    }
}