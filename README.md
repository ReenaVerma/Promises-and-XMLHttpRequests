# Image search

## Notes
* I did not look at your code at all, as I really wanted you to see, how I would attempt this task fist time round.

## Learnings
* If you use an asynchronous XMLHttpRequest, you receive a callback when the data has been received. This lets the browser continue to work as normal while your request is being handled.

* Asynchronous requests should be preferred to synchronous requests for performance reasons.

* Synchronous requests block the execution of code, which creates "freezing" on the screen and an unresponsive user experience.

## Questions
* I wasn't sure, for which types of errors, this code covers (line 38):
```
else {
  // IF THERE IS AN ERROR DISPLAY
  console.error('ERROR', xhr.statusText);
  resultsText.innerHTML = xhr.statusText;
}
```

* As this code, covers network errors (line 57):
```
xhr.onerror = function() {
  resultsText.innerHTML = 'Network connection error! Check you internet connection!';
};
```

* I also wondered why ```null``` is passed through here (line 63):
```
xhr.send(null);
```

## API
* Used ```Invision``` to test api credentials/headers:

![alternativetext](https://i.imgur.com/4ciJuL8.png[)
