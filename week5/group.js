//create an array of hikes
import Hikes from './hike-data.js';

const hikeList = new Hikes("hikes");



//on load grab the array and insert it into the page
window.addEventListener("load", () => {
  hikeList.showHikeList();
});
