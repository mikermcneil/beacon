# ko.extenders.store

A simple Knockout extender for [marcuswestin/store.js](https://github.com/marcuswestin/store.js).


## Usage

### Using Require.js
```js
// Using Require.js (require last, as it doesn't export anything)
require(["ko.extenders.store"], function () {
  // The observable's value is stored in storage under key "search-terms".
  my_observable.extend({ store: "search-terms" });
});
```

### Plain old script tags
```html
<script src="ko.extenders.js"></script>
<script>
  // The observable's value is stored in storage under key "search-terms".
  my_observable.extend({ store: "search-terms" });
</script>
```
