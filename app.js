const loadJsonFile = require('load-json-file');
loadJsonFile('data.json').then(json => {
    for(let i = 0; i < json.items.length; i++){
        console.log(json.items[i].fname + " " + json.items[i].age)
    }

});