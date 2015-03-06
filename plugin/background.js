if (typeof POC === "undefined") {
    POC = {};
}

//initialize jquery to use POC.$ so that we know what version of jquery we are running
POC.$ = jQuery.noConflict();



console.log("running poc, modify dom from here")


console.log(POC.$('body'))
