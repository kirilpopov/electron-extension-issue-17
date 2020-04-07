[Issue here](https://github.com/sentialx/electron-extensions/issues/17)

If I run a content script it work fine, however if I add preload script , the preload script is executed, but the content is not.

If you comment out line 24 in main js (which adds the preload script), the content script will start working.
