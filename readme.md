[Issue here](https://github.com/sentialx/electron-extensions/issues/17)

If I run a content script it works fine, however if I add preload script to ExtensibleSession, the content script is not executed any more (however the preload is).

If you comment out line 24 in main js (which adds the preload script), the content script will start working.
