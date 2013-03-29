var extender = function (ko, store) {

    ko.extenders.store = function (observable, key_name) {
        observable(store.get(key_name));
        observable.subscribe(function (new_value) {
            store.set(key_name, new_value);
        });
    };

}

if (window["define"] !== void 0) {
    // If Require.js is available
    define(
        "ko.extenders.store",
        ["knockout", "store"],
        extender
    );
} else {
    // Else, just create the extender
    extender(ko, store);
}