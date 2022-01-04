# JiraClip

Chrome Extension that assists linking to jira tickets.

## Installing

1. Clone this repo.
2. On Chrome, go to [chrome://extensions/](chrome://extensions/)
3. On the top right of the page, toggle `Developer Mode` on (if it is not already toggled on).
4. On the top left of the page, click `Load unpacked` and then select the `src` folder of this repo.
5. You should now see the JiraClip icon (![JiraClip Icon](https://raw.githubusercontent.com/andregce/jiraclip/main/src/extension_toolbar_icon16.png)) on your extensions toolbar. Click the icon to automatically copy the ID and title of every Jira ticket you have open on the current window.

## Updating

To update the app it might be necessary to remove it first, and then follow the Installation instructions again. You can remove the app from [chrome://extensions/](chrome://extensions/), by clicking the `Remove` button.

## Using

Click on the app icon to copy all the open Jira tickets to the clipboard, formatted to share on slack. The app also adds an icon (![JiraClip Icon](https://raw.githubusercontent.com/andregce/jiraclip/main/src/assets/img/link.png)) to the Jira ticket header. Clicking the icon will copy the ticket to the clipboard, with the same format.