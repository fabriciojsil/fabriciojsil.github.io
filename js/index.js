(function loader() {
    function startSkypeButton(){
        Skype.ui({
            "name": "chat",
            "element": "skype-button",
            "participants": ["fabriciojs"],
            "imageSize" : 32
        });
    }

    function startGa() {
        window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
        ga('create', 'UA-104905890-1', 'auto');
        ga('send', 'pageview');
    }

    document.onreadystatechange = function () {
        if (document.readyState == "complete") {
            startGa();
            startSkypeButton();
        }
    }
}());