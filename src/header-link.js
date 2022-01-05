const ulSelector = "#stalker > div > header > div > div.aui-page-header-main > ol"
const ticketIdId = "key-val"
const summaryId = "summary-val"

function getTicketId() {
    return document.getElementById(ticketIdId).textContent
}

function getTicketSummary() {
    return document.getElementById(summaryId).textContent
}

(function () {
    let ticketLink = ""

    ticketLink += "<a href='" + jiraUrl + "browse/" + getTicketId() + "'>" + getTicketId() + "</a>"
    ticketLink += " "
    ticketLink += getTicketSummary()
    ticketLink += "<br>"

    let icon = document.createElement('span')
    icon.classList.add("aui-icon", "aui-icon-small", "aui-iconfont-link")
    icon.textContent = "Click to copy link to clipboard"
    icon.addEventListener("click", function(){
        copyTextToClipboard(ticketLink)
        icon.classList.remove("aui-iconfont-link")
        icon.classList.add("aui-iconfont-check")

        setTimeout(() => {
            icon.classList.remove("aui-iconfont-check")
            icon.classList.add("aui-iconfont-link")
        }, 3000);
    });

    let aTag = document.createElement('a');
    aTag.href = "#"
    aTag.appendChild(icon)

    let li = document.createElement("li")
    li.appendChild(aTag)

    let ul = document.querySelector(ulSelector)
    ul.appendChild(li)

})()