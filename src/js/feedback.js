let settings = document.querySelector('.modal-button__btn_settings');
let feedback = document.querySelector('.feedback');
let feedbackWrapper = document.querySelector('.feedback-wrapper');
let feedbackClose = document.querySelector('.feedback-close');
let settings1440 = document.querySelector('.modal-button__btn_settings-feedback');

let showFeedback = function(closeFeedback, showFeedbackCall, showOverlay) {
    feedback.classList.remove(closeFeedback);
    feedback.classList.add(showFeedbackCall);
    feedbackWrapper.classList.add(showOverlay);
}

let closeFeedback = function(openFeedbackCall, hideFeedback, cloaseOverlay) {
    feedback.classList.remove(openFeedbackCall);
    feedback.classList.add(hideFeedback);
    feedbackWrapper.classList.remove(cloaseOverlay);
}

settings.addEventListener('click', function() {
    showFeedback('closeFeedback', 'showFeedbackCall', 'feedback-overlay');
})

settings1440.addEventListener('click', function() {
    showFeedback('closeFeedback', 'showFeedbackCall', 'feedback-overlay');
})

feedbackClose.addEventListener('click', function() {
    closeFeedback('showFeedbackCall', 'closeFeedback', 'feedback-overlay');
})

feedbackWrapper.addEventListener('click', function() {
    closeFeedback('showFeedbackCall', 'closeFeedback', 'feedback-overlay');
})