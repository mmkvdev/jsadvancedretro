const character = {
    name: 'Simon',
    getCharacter () {
        return this.name;
    }
};

const giveMeTheCharacterNameNow = character.getCharacter.bind(character);

console.log('?', giveMeTheCharacterNameNow());