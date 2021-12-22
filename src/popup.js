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

function formatTicketID(ticketId) {
    return ticketId.replace('\[','').replace('\]','')
}

function formatTicketSummary(ticketSummary) {
    return ticketSummary.replace(' - Retail - JIRA', '')
}

(function main() {
    chrome.windows.getCurrent({
        "populate": true
    }, function (currentWindow) {
        let jiraLinks = ''
        const jiraTabs = currentWindow.tabs.filter(tab => tab.url.startsWith(jiraUrl))

        jiraTabs.forEach(jiraTab => {
            const ticketId = jiraTab.title.match(ticketIdRegex)
            const ticketSummary = jiraTab.title.replace(ticketIdRegex, '')
            if (ticketId?.length > 0) {
                jiraLinks += "<a href='" + jiraTab.url + "'>" + formatTicketID(ticketId[0]) + "</a>"
                jiraLinks += " "
                jiraLinks += formatTicketSummary(ticketSummary)
                jiraLinks += "<br>"
            }
        })

        copyTextToClipboard(jiraLinks)
    })
}())