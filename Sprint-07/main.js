document.addEventListener("DOMContentLoaded", function(event) {
    var db = {
        "pages": {
            "home": {
                "title": "Brenton's Homepage",
                "heading": "Brenton Strine",
                "main": [
                    "This website is a single page app built from the ground up with Javascript only..",
                    "There are definitely better ways of making a website, but for the sake of learning web development, this is interesting."
                ]
            },
            "about": {
                "title": "Brenton's Homepage",
                "heading": "About Brenton Strine",
                "main": [
                    "Brenton is a web developer and a teacher for <a href=\"https://friendsofrefugees.com/\">Friends of Refugees</a>. ",
                    "If you would like to help him in his mission to helping refugees find work in the community, please contact him at <b>brenton.strine@gmail.com</b>."
                ]
            },
            "portfolio": {
                "title": "Brenton's Homepage",
                "heading": "Brenton's Portfolio",
                "main": [
                    "Haven't added anything here yet. Check back later."
                ]
            },
            "blog": {
                "title": "Brenton's Homepage",
                "heading": "Blog",
                "main": [
                    "Haven't added anything here yet. Check back later."
                ]
            }
        },
        "components": {
            "title": "Brenton's Homepage",
            "sidebar": {
                "heading": "Site Navigation",
                "links": [
                    ["Home", "#home"],
                    ["About", "#about"],
                    ["Portfolio", "#portfolio"],
                    ["Blog", "#blog"]
                ]
            },
            "footer": "Copyright {year} Brenton Strine"
        }
    };

    var buildSite = function(page){
        var currentPage = page || getRoute();
        if(typeof currentPage === "undefined") {
            currentPage = "home";
            setRoute("#home");
        }
        var siteHeading = document.querySelector("#js-site__heading");
        var content = document.querySelector("#js-content");
        var pageHeading = content.querySelector("#js-page__heading");
        var pageContent = content.querySelector("#js-page__content");
        var footer = document.querySelector("#js-footer");
        var dbPage = db.pages[currentPage];

        //populate heading
        document.querySelector("title").textContent = dbPage.title;
        siteHeading.textContent = db.components.title;

        //populate header
        pageHeading.textContent = dbPage.heading;

        //populate sidebar
        var navBarUL = document.querySelector("#js-navbar__ul");
        var navBarListFrag = "";
        db.components.sidebar.links.forEach(function(link){
            navBarListFrag += "<li class='nav-item'><a class = 'nav-link' href='" + link[1] + "'>" + link[0] + "</a></li>";
        });
        navBarUL.innerHTML = navBarListFrag;

        //highlight link to current page
        highlightLink(currentPage);

        //populate main content
        var mainFrag = "";
        dbPage.main.forEach(function(paragraph){
            mainFrag += "<p>" + paragraph + "</p>";
        });
        pageContent.innerHTML = mainFrag;

        //populate footer
        var currentYear = "2017";
        var footerString = db.components.footer.replace("{year}", currentYear);
        footer.innerHTML ="<p>" + footerString + "</p>";

        //intercept all link clicks
        var anchors = document.querySelectorAll("a");
        anchors.forEach(function(anchor){
            var linkValue = anchor.getAttribute("href");

            //is this a link to one of our internal pages? (e.g., first character is `#`)
            if(linkValue.charAt(0) === "#") {
                // get the page name without the `#`
                var linkName = linkValue.substr(1);
                //does this link exist in our database of pages?
                if(db.pages[linkName]) {
                    //then set up an event listener for this event.
                    anchor.addEventListener("click", function(event){ //*callback functions, "this" context is different
                        //onclick, intercept and stop normal behavior
                        event.preventDefault();
                        var newPage = this.getAttribute("href");
                        //tell the browser we are changing pages
                        history.pushState({"page": newPage}, "", newPage);
                        changeRoute(newPage);
                    });
                }
            }
        });
    };

    //listen for page history changes (e.g. 'back' button)
    window.onpopstate = function(e){
        var page = e.state.page;
        changeRoute(page);
    };

    var changeRoute = function(page){
        var pageName = page.substr(1)
        buildSite(pageName);
    }

    var getRoute = function(){
        var path = document.location.href.split("#")[1];
        return path;
    };

    var setRoute = function(newRoute){
        history.pushState({"page": newRoute}, "", newRoute);
    };

    var highlightLink = function(link){
        document.querySelector("[href='#" + link + "']").className += " nav-link__active";
    };

    buildSite("home");
});
