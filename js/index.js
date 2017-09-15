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

    function startOneSignal() {
        let OneSignal = window.OneSignal || [];
        OneSignal.push(["init", {
          appId: "0c4ce91c-400f-45fb-8ded-16d84211ea0d",
          autoRegister: false,
          notifyButton: {
            enable: true
          }
        }]);
    }


    document.onreadystatechange = function () {
        if (document.readyState == "complete") {
            startGa();
            startSkypeButton(); 
            startOneSignal()   
        }
    }
}());