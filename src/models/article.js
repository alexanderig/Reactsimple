export default class Article {

    static idGen = 0;
    constructor(title, content){
        this.id = ++Article.idGen;
        this.title = title;
        this.content = content;
    }
}
