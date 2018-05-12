function showNote(note) {
    let innerHtml = `<div class="note" style="background: ${note.color}" data-note-id="${note.id}">
                        <div class="note-header d-flex justify-content-between">
                            <div clas="note-date">${convertUnixStampToScreenDate(note.date)}</div>
                            <div class="note-controls">
                                <button class="note-control edit" data-toggle="modal" data-target="#note-modal" title="Edit note">
                                    <i class="fas fa-pencil-alt"></i>
                                </button>
                                <button class="note-control edit" title="Remove note" data-toggle="modal" data-target="#remove-modal">
                                    <i class="far fa-trash-alt"></i>
                                </button>
                            </div>
                        </div>
                        <div class="note-body">${note.text}</div></div>`;
    $(".page-body").append(innerHtml);    
}


function clearLoadingAnimation() {
    $(".cssload-container").hide();
}

function addNoExtensionAlert() {
    let div = document.createElement('div');
    div.innerHTML = `<div class="container mb-0"><div class="alert alert-danger" role="alert">
        Please install <a href="https://github.com/ChengOrangeJu/WebExtensionWallet" class="alert-link">WebExtensionWallet</a> to use Crypto Funding.
    </div></div>`;

    let nav = document.querySelector(".main-nav");
    nav.parentNode.insertBefore(div.firstChild, nav.nextSibling);
}


function convertUnixStampToScreenDate(unixstamp) {
    let date = new Date(+unixstamp);
    return addZeroIfOneCharacter(date.getDate()) + "." + addZeroIfOneCharacter(date.getMonth()) + "." + date.getFullYear() +
                                ` at ${addZeroIfOneCharacter(date.getHours())}:${addZeroIfOneCharacter(date.getMinutes())}`;
}

function convertScreenDateToUnixStamp(date) {
    //format: 22.04.1999
    let pattern = /(\d{2})\.(\d{2})\.(\d{4})/;
    let dt = new Date(date.replace(pattern,'$3-$2-$1'));
    return +dt;
}

function addZeroIfOneCharacter(value) {
    let str = value.toString();
    return str.length == 1 ? "0" + str : str;
}
