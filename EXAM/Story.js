class Story{
    constructor(title, creator){
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = [];
    }

    get likes(){
        if(this._likes.length == 0){
            return `${this.title} has 0 likes`
        }
        else if(this._likes.length == 1){
            return `${this._likes[0]} likes this story!`
        }
        else{
            return `${this._likes[0]} and ${this._likes.length-1} others like this story!`
        }
    }
    
    like(username){
        let isLiked = this._likes.find(u => u == username);
        if(isLiked == true){
            throw new Error(`You can't like the same story twice!`);
        }
        else if(username == this.creator){
            throw new Error("You can't like your own story!");
        }
        else{
            this._likes.push(username);
            return `${username} liked ${this.title}!`
        }
    }
        
    
    dislike(username){
        let isLiked2 = true;
        if(!isLiked2){
            throw new Error(`You can't dislike this story!`)
        } 
        else{
            let index = this._likes.indexOf(username);
            this._likes.splice(index,1)
            return `${username} disliked ${this.title}`
        }
    }
    comment(username, content, id){
        let comment = this._comments.find(c => c.id == id);
        if(id === undefined || id === ''){
            
            this._comments.push(this._comments.push({ id: this._comments.length + 1, username, content, replies: [] }));
            return `${username} commented on ${this.title}`;
        }
        else if(id){
            let replyId = `${id}.${comment.replies.length + 1}`
            comment.replies.push({id: replyId, username, content})
            return 'You replied successfully'
        }
    }
    toString(sortingType){
        let sorted;
        if(sortingType == 'asc'){
            sorted = Object.entries(this._comments).sort((a,b) => a.id - b.id)
        }
        else if(sortingType == 'desc'){
            sorted = Object.entries(this._comments).sort((a,b) => b.id - a.id)
        }
        else if(sortingType == 'username'){
            sorted = Object.entries(this._comments).sort((a,b) => a.username.localeCompare(b.username))
        }
        let result = [`Title: ${this.title}`, `Creator: ${this.creator}`, `Likes: ${this._likes.length}`, `Comments:`]
        this._comments.sort(sorting[sortingType]).forEach(com => {
            result.push(`-- ${com.id}. ${com.username}: ${com.content}`)
            com.replies.sort(sorting[sortingType]).forEach(rep => {
                result.push(`--- ${rep.id}. ${rep.username}: ${rep.content}`)
            })
        });

        return result.join('\n')
    }
}


let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));
