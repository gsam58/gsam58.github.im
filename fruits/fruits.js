$(document).ready(function() {

var videos = [
'iSAGmt7oni0',
'KT9HdVv1M6E',
'U73wQYsr-1k',
'vZSNkH7Z-ME'
];

var index=Math.floor(Math.random() * videos.length);
var html='<div id="video" class="video"><iframe width="620" height="380"   src="http://www.youtube.com/embed/' + videos[index] + '?autoplay=1" frameborder="0" allowfullscreen></iframe></div>';
document.write(html);

});

var keyword = "fruits";

    $(document).ready(function(){

        $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
        {
            tags: keyword,
            tagmode: "any",
            format: "json"
        },
        function(data) {
            var rnd = Math.floor(Math.random() * data.items.length);

            var image_src = data.items[rnd]['media']['m'].replace("_m", "_b");

            $('body').css('background-image', "url('" + image_src + "')");

        });

    });


//inspiration gathered from StackOverflow