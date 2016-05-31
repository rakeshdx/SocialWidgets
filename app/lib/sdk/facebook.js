export function fbSDK(d, s, id) {
 var js, fjs = d.getElementsByTagName(s)[0];
 if (d.getElementById(id)) return;
 js = d.createElement(s); js.id = id;
 js.async = true;
 js.src = "http://connect.facebook.net/en_US/all.js#xfbml=1&appId=122150691493";
 fjs.parentNode.insertBefore(js, fjs);
 };
