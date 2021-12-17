const jiraUrl = 'https://retail-jira.apple.com/'
const ticketIdRegex = /\[[A-Z]*\-[0-9]*\]/

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

(function main() {
    chrome.windows.getCurrent({
        "populate": true
    }, function (currentWindow) {
        let jiraLinks = ''
        const jiraTabs = currentWindow.tabs.filter(tab => tab.url.startsWith(jiraUrl))
        jiraTabs.forEach(jiraTab => {
            let ticketId = jiraTab.title.match(ticketIdRegex)
            const ticketSummary = jiraTab.title.replace(ticketIdRegex, '')
            if (ticketId?.length > 0) {
                jiraLinks += "<a href='" + jiraTab.url + "'>" + ticketId[0].replace('\[','').replace('\]','') + "</a>" + " " + ticketSummary.replace(' - Retail - JIRA', '') + "<br>"
            }
        })
        copyTextToClipboard(jiraLinks)
    })
}())