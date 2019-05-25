
var documents = [{
    "id": 0,
    "url": "/404.html",
    "title": "404",
    "body": "  404 Page not found  Please use the search bar at the top or visit our homepage! "
    }, {
    "id": 1,
    "url": "/apps",
    "title": "App Directory",
    "body": "      App Directory:                                                                                                                                                                                                           GCBGC Website                              :               Website for the Girton College Board Games Club. :                                                                                                                                                                                                                                                                                                                         Fake Artist Companion                              :               A web app to replace the gamemaster when playing A Fake Artist Goes to New York. :                                                                                                                                                                                                                                                                                                                         Avalon Companion                              :               A web app to replace the announcer when playing The Resistance: Avalon. :                                                                                                                         "
    }, {
    "id": 2,
    "url": "/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 3,
    "url": "/",
    "title": "Home",
    "body": "      Featured:                                                                                                                                                                                                                   Fake Artist Companion                              :               A web app to replace the gamemaster when playing A Fake Artist Goes to New York. :                                                       20 May 2019                                                                                                                                                                                                                                                                                  Avalon Companion                              :               A web app to replace the announcer when playing The Resistance: Avalon. :                                                       20 May 2019                                                                                        Everything:                                                                                             GCBGC Website              :       Website for the Girton College Board Games Club. :                       20 May 2019                                                                                                            Fake Artist Companion              :       A web app to replace the gamemaster when playing A Fake Artist Goes to New York. :                       20 May 2019                                                                                                            Avalon Companion              :       A web app to replace the announcer when playing The Resistance: Avalon. :                       20 May 2019                                    "
    }, {
    "id": 4,
    "url": "/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ &#8220;sitemap. xml&#8221;   absolute_url }}   "
    }, {
    "id": 5,
    "url": "/gcbgc-website/",
    "title": "GCBGC Website",
    "body": "2019/05/20 - Website for the Girton College Board Games Club. "
    }, {
    "id": 6,
    "url": "/fake-artist/",
    "title": "Fake Artist Companion",
    "body": "2019/05/20 - A web app to replace the gamemaster when playing A Fake Artist Goes to New York. Instructions:  Enter the number of players on the first screen and press play.  Each player privately selects their number and views the prompt word.  One player is secretly chosen as “Fake” so does not know the prompt word.  Players take it in turn to add to a drawing until each player has drawn two times.  All players vote on who the fake was.  If the fake is not chosen correctly they win.  If the fake is chosen correctly but they guess the prompt word the fake wins, otherwise the other players win. "
    }, {
    "id": 7,
    "url": "/avalon/",
    "title": "Avalon Companion",
    "body": "2019/05/20 - A web app to replace the announcer when playing The Resistance: Avalon. Instructions:  Use the button in the bottom left to select the number of players.  Select the desired roles.  Distribute and privately view role cards.  Press play to begin narration. "
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow-lg" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-danger btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><small><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});