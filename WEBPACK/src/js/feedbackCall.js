let callBack = document.querySelector('.modal-button__btn_search-callBack');
let feedbackCall = document.querySelector('.feedbackCall');
let feedbackCallWrapper = document.querySelector('.feedbackCall-wrapper');
let callBackClose = document.querySelector('.modal-button__btn_close-callBack');
let callBack1440 = document.querySelector('.modal-button__btn_services-callBack1440');

let openCallBack = function(closeFeedbackCall, showFeedbackCall, overlayCallBack) {
    feedbackCall.classList.remove(closeFeedbackCall);
    feedbackCall.classList.add(showFeedbackCall);
    feedbackCallWrapper.classList.add(overlayCallBack);
}

let closeCallBack = function(hideFeedbackCall, openFeedbackCall, closelayCallBack) {
    feedbackCall.classList.remove(hideFeedbackCall);
    feedbackCall.classList.add(openFeedbackCall);
    feedbackCallWrapper.classList.remove(closelayCallBack);
}

callBack.addEventListener('click', function() {
    openCallBack('closeFeedbackCall', 'showFeedbackCall', 'feedback-overlay');
})

callBack1440.addEventListener('click', function() {
    openCallBack('closeFeedbackCall', 'showFeedbackCall', 'feedback-overlay');
})

callBackClose.addEventListener('click', function() {
    closeCallBack('showFeedbackCall', 'closeFeedbackCall', 'feedback-overlay');
})

feedbackCallWrapper.addEventListener('click', function() {
    closeCallBack('showFeedbackCall', 'closeFeedbackCall', 'feedback-overlay');
})