var isWallabyRun = (typeof wallaby === "object");

isWallabyRun ? wallaby.delayStart() : void(0);

requirejs.config({
    paths: {},
    deps: isWallabyRun ? wallaby.tests : undefined,
    callback: isWallabyRun ? wallaby.start : undefined
});