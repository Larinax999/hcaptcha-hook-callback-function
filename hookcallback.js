// execute this js before reader hcaptcha
window.hcapcheck = setInterval(() => {
    if (window.hcaptcha) {
        window._render = hcaptcha.render;
        window.hcaptcha.render = (container, params) => {
            //console.log(container);
            //console.log(params);
            window.hcapcallback = params.callback;
            return window._render(container, params);
        };
        clearInterval(window.hcapcheck);
    }
}, 1);
