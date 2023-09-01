import { getData } from './firebase.js';

//suppose you want to display the list of wolves in the browser console
window.addEventListener("DOMContentLoaded", async (e) => {
    const querySnapshot = await getData();
    querySnapshot.forEach((doc) => {
        console.log(doc.data());
    });
});