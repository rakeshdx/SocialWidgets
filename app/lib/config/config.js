export let config = {
    facebook: {
        name : "Follow MTV News",
        options : {
            url : "http://www.facebook.com/mtvnews",
            className : "fb-like",
            layout : "button_count",
            action : "like",
            share : false
        }
    },
    twitter: {
        name : "Follow MTV News",
        options : {
            url : "http://www.twitter.com/mtvnews",
            className : "twitter-follow-button",
            dataSize : "small",
            showScreenName : false
        }
    },
    instagram: {
        name : "Follow",
        options : {
            url : "https://www.instagram.com/mtvnews/?ref=badge",
            className : "ig-b- ig-b-v-24"
        }
    },
    youtube: {
        name: "Subscribe",
        options: {
            url : "http://www.youtube.com/mtvnews/",
            className : "g-ytsubscribe",
            channelId : "UCAUO8EhsSTz02stvKDupChQ",
            layout : "default",
            count : "default"
        }
    }
};
