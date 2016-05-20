import {Pipe, PipeTransform, Injectable} from 'angular2/core';

@Pipe({
    name: 'favoriteFilter',
    pure: false
})
@Injectable()
export class FavoriteFilterPipe implements PipeTransform {
    transform(items: any[], args: any[]): any {
        // filter items array, items which match and return true will be kept, false will be filtered out
        //return items.filter(item => item.title.indexOf(args[0].title) !== -1);
        return items.filter(item => item.isFavorite);
    }
}