$(document).ready(function(){
    $("#jquery_jplayer_1").jPlayer({
        ready: function () {
            $(this).jPlayer("setMedia", {
                title: "Dandelion Journey",
                m4v: "assets/dandelion3.m4v",
                ogv: "assets/dandelion3.ogv"
            })
            .jPlayer("play");
        },
        cssSelectorAncestor: "#jp_container_1",
        swfPath: "/js",
        supplied: "m4v, ogv",
        useStateClassSkin: true,
        autoBlur: false,
        smoothPlayBar: true,
        keyEnabled: true,
        remainingDuration: true,
        toggleDuration: true,
        loop: true,
        autoplay: true,
        size: {
            width: "510px"
        }
    });

    $("#jquery_jplayer_2").jPlayer({
        ready: function () {
            $(this).jPlayer("setMedia", {
                title: "Enya2",
                m4a: "assets/enya2.mp3",
                oga: "assets/enya2.ogg"
            });
        },
        cssSelectorAncestor: "#jp_container_2",
        swfPath: "/js",
        supplied: "m4a, oga",
        useStateClassSkin: true,
        autoBlur: false,
        smoothPlayBar: true,
        keyEnabled: true,
        remainingDuration: true,
        toggleDuration: true,
        size: {
            width: "510px"
        }
    });

}); //end ready