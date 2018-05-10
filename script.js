$(document).ready(function() {

var videos = [
'qBuXOQLR4Y8&list=RDpzhVBsR-mLA&index=26',
'dGgvtmMz-Hc&list=RDpzhVBsR-mLA&index=26',
'PRXtbLqIx04&list=RDpzhVBsR-mLA&index=31',
'EJv2ZM8emtQ&index=24&list=RDpzhVBsR-mLA',
'fZ1Jxef2hiE&list=RDpzhVBsR-mLA&index=35',
'EyxacgNyV4Q&index=47&list=RDpzhVBsR-mLA'
];

var index=Math.floor(Math.random() * videos.length);
var html='<div id="video" class="video"><iframe width="620" height="380"   src="http://www.youtube.com/embed/' + videos[index] + '?autoplay=1" frameborder="0" allowfullscreen></iframe></div>';
div = document.getElementById( 'test' );

div.insertAdjacentHTML( 'beforeend', html );

});
