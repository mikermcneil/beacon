var jam = {
    "packages": [
        {
            "name": "hammer",
            "location": "jam/hammer",
            "main": "hammer.js"
        },
        {
            "name": "jquery",
            "location": "jam/jquery",
            "main": "dist/jquery.js"
        },
        {
            "name": "knockout",
            "location": "jam/knockout",
            "main": "knockout.js"
        },
        {
            "name": "knockout.mapping",
            "location": "jam/knockout.mapping",
            "main": "knockout.mapping.js"
        },
        {
            "name": "ko.extenders.store",
            "location": "jam/ko.extenders.store",
            "main": "ko.extenders.store.js"
        },
        {
            "name": "modernizr",
            "location": "jam/modernizr"
        },
        {
            "name": "moment",
            "location": "jam/moment",
            "main": "moment.js"
        },
        {
            "name": "postal",
            "location": "jam/postal",
            "main": "lib/browser/postal.js"
        },
        {
            "name": "store",
            "location": "jam/store",
            "main": "store"
        },
        {
            "name": "underscore",
            "location": "jam/underscore",
            "main": "underscore.js"
        }
    ],
    "version": "0.2.15",
    "shim": {
        "underscore": {
            "exports": "_"
        }
    }
};

if (typeof require !== "undefined" && require.config) {
    require.config({
    "packages": [
        {
            "name": "hammer",
            "location": "jam/hammer",
            "main": "hammer.js"
        },
        {
            "name": "jquery",
            "location": "jam/jquery",
            "main": "dist/jquery.js"
        },
        {
            "name": "knockout",
            "location": "jam/knockout",
            "main": "knockout.js"
        },
        {
            "name": "knockout.mapping",
            "location": "jam/knockout.mapping",
            "main": "knockout.mapping.js"
        },
        {
            "name": "ko.extenders.store",
            "location": "jam/ko.extenders.store",
            "main": "ko.extenders.store.js"
        },
        {
            "name": "modernizr",
            "location": "jam/modernizr"
        },
        {
            "name": "moment",
            "location": "jam/moment",
            "main": "moment.js"
        },
        {
            "name": "postal",
            "location": "jam/postal",
            "main": "lib/browser/postal.js"
        },
        {
            "name": "store",
            "location": "jam/store",
            "main": "store"
        },
        {
            "name": "underscore",
            "location": "jam/underscore",
            "main": "underscore.js"
        }
    ],
    "shim": {
        "underscore": {
            "exports": "_"
        }
    }
});
}
else {
    var require = {
    "packages": [
        {
            "name": "hammer",
            "location": "jam/hammer",
            "main": "hammer.js"
        },
        {
            "name": "jquery",
            "location": "jam/jquery",
            "main": "dist/jquery.js"
        },
        {
            "name": "knockout",
            "location": "jam/knockout",
            "main": "knockout.js"
        },
        {
            "name": "knockout.mapping",
            "location": "jam/knockout.mapping",
            "main": "knockout.mapping.js"
        },
        {
            "name": "ko.extenders.store",
            "location": "jam/ko.extenders.store",
            "main": "ko.extenders.store.js"
        },
        {
            "name": "modernizr",
            "location": "jam/modernizr"
        },
        {
            "name": "moment",
            "location": "jam/moment",
            "main": "moment.js"
        },
        {
            "name": "postal",
            "location": "jam/postal",
            "main": "lib/browser/postal.js"
        },
        {
            "name": "store",
            "location": "jam/store",
            "main": "store"
        },
        {
            "name": "underscore",
            "location": "jam/underscore",
            "main": "underscore.js"
        }
    ],
    "shim": {
        "underscore": {
            "exports": "_"
        }
    }
};
}

if (typeof exports !== "undefined" && typeof module !== "undefined") {
    module.exports = jam;
}