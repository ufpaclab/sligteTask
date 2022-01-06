timeline = [];

var welcome_block = {
  type: 'html-keyboard-response',
  stimulus: 'Welcome to the experiment<br><br> Please press the space bar when you are ready to begin. ',
  choices: [' '],
}

var questionPreface = {
  type: 'html-keyboard-response',
  stimulus: "First, we're going to ask you two brief questions about your age and gender.<br><br>Press space bar to continue.",
  choices: [' '],
}

var questionGender = {
  type: 'html-keyboard-response',
  stimulus: "Which gender best describes you?<br><br>Press Q if you identify as female.<br>Press P if you identify as male.<br>Press V if you identify as other.",
  choices: ['q', 'p', 'v'],
}



timeline.push(welcome_block);
timeline.push(questionPreface);
timeline.push(questionGender);

jsPsych.init({
    timeline: timeline,
})