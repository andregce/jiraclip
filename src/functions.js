const jiraUrl = 'https://retail-jira.apple.com/'

function copyTextToClipboard(text) {
    function listener(e) {
        e.clipboardData.setData("text/html", text)
        e.clipboardData.setData("text/plain", text)
        e.preventDefault()
    }
    document.addEventListener("copy", listener)
    document.execCommand("copy")
    document.removeEventListener("copy", listener)
}