describe('The object in action', function () {
let Song = require('../Song');
let song;

beforeEach(function () {
    song = new Song("Nocturne in D", "Classical", "Chopin");
    song1 = new Song('A', 'B', 'C');
});
afterEach(function (){
    song;
    song1;
})
    it('should be able to list the nanme of a song', function(){
        expect(song.name).toBe("Nocturne in D");

    })

    it('should be able to list the nanme of a song', function(){
        expect(song.album).toBe("Classical");

    })

    xit("song and author should be the same", function () {
        expect(song.getDescription()).toEqual("The name of this song is Nocturne in D and it is from the album Classical. It is written by Chopin");
    });

    xit('should tell us the description of the song', function(){
        expect(song1.getDescription()).toEqual("The name of this song is A and it is from the album B. It is written by C")

    })
});


