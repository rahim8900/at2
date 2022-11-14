class Message {
    constructor(time, muallif,  metn) {
        this.muallif = muallif;
        this.time = time;
        this.metn = metn;
    }
    toString() {
        console.log(`${this.time} ${this.muallif}: ${this.metn}`);
    }
}
class Messenger {
    constructor() {
        this.mesajlar = [];
    }
    send(author, text) {
        let mesaj = new Message(gettime(), author, text);
        this.mesajlar.push(mesaj);
    }
    show_history() {
        this.mesajlar.map((mesaj) => mesaj.toString());
    }

}
function gettime() {
    let now = new Date();
    return `${now.getHours()}:${now.getMinutes()}`
}


let messenger = new Messenger();
messenger.send('Adil', 'ilk mesaj');
messenger.send('Məryəm', 'İkinci mesaj');
messenger.show_history()