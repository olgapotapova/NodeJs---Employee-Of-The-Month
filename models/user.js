const fs = require('fs');
const path = require('path');
const filePath = path.join(path.dirname(require.main.filename), 'data', 'users.json');

module.exports = class User {

    constructor( url, name, achievement) {
        this.imageUrl = url;
        this.name = name;
        this.achievement = achievement;
    }
    save() {
        fs.readFile(filePath, (error, fileContent) => {
            let users = [];
            if (!error) {
               users = JSON.parse(fileContent);
            }
            const newusers = users.filter(user => user.length > 0);
            newusers.push(this);
            fs.writeFile(filePath, JSON.stringify(newusers), (error) => {
                console.log(error);
            });
        });
    }


    static fetchAll(cb) {
        fs.readFile(filePath, (error, fileContent) => {
            if (error) {
                cb([]);
            }
            cb(JSON.parse(fileContent));
        });
    }
}
