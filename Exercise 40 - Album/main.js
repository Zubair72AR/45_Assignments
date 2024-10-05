"use strict";
// Assignment - 40
// function called make_album() that builds a Object describing a music album
function make_album(artistName, albumTitle, totalTrack) {
    let album = {
        artist: artistName,
        title: albumTitle,
    };
    if (totalTrack) {
        album.tracks = totalTrack;
    }
    return album;
}
// Storing called function in a variable
let album1 = make_album("Ali Zafar", "PSL9");
let album2 = make_album("Taylor Swift", "Midnights");
let album3 = make_album("The Weeknd", "After Hours", 20);
// Printing the album information
console.log(album1);
console.log(album2);
console.log(album3);
