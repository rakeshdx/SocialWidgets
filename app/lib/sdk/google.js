export function googleSDK(d,t)
{
    var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
    g.src="//apis.google.com/js/platform.js";
    g.async = true;
    g.defer = true;
    s.parentNode.insertBefore(g,s);
};
