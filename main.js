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

 var age = {
  type: 'survey-text',
  questions: [
    {prompt: 'How old are you? Use numberic answers such as 19.',
    required: true,
    }
  ]
}

var intro_5 = {
  type: 'html-keyboard-response',
  stimulus: 'This experiment will try to assess how effectively you can do two things: <p><b>1.)<b/> Direct your attention to locations.<p/> <p><b>2.)<b/> Report things you have seen.<p/> <p>Press space bar to continue.<p/>'
}
  
var intro_6 = {
  type: 'html-keyboard-response',
  stimulus: 'Each trial in the experiment follows a simple procedure. We will now show you how it will work. <b><p>Ready? Press the space bar to proceed.<p/><b/>'
}  

var intro_7 = {
    type: 'html-keyboard-response',
    stimulus: 'At the start of each trial, a blue dot will appear. <b><p>Whenever the blue dot is on the screen, make sure you look at the dot!<p/><b/> <b><p>Press the space bar to see what the blue dot looks like.<p/><b/>'
  }
  
 var intro_dot = {
    type: 'visual-search-circle',
      fixation_image: 'img/blue.png',
      trial_duration: 1000,
      choices: jsPsych.NO_KEYS    
  }
  
 var intro_dot2 = {
    type: 'visual-search-circle',
      fixation_image: 'img/red dot.png',
      trial_duration: 1000,
      choices: jsPsych.NO_KEYS    
  }
  
var intro_8 = {
    type: 'html-keyboard-response',
    stimulus: 'Whenever a trial is about to start, the blue dot changes to a red dot. <b><p>Press the space bar to see what this looks like.<p/><b/> '
  }
  
var intro_9 = {
    type: 'html-keyboard-response',
    stimulus: '<p><b>Make sure to always looks at the blue or red dots whenever they are on the screen!<b/><p/> <p>After the dot turns red, images will appear on the screen. Your goal is to try to pay attention to <b>all eight images at once<b/>, and remember as many images as possible!<p/> We know this is difficult, but simply try to do the best you can! <b><p>Press space bar.<b/><p/>'
  }

var intro_10 = {
    type: 'html-keyboard-response',
    stimulus: 'Keep in mind that when the images are presented, it will be tempting to try to look directly at them, <b>but we want you to keep looking at the dot the entire time!<b/> <b><p>Press space bar.<p/><b/>'
  }
  
var simmy = {
  target_present: true,
  set_size: 8
}

var sim = {
    type: 'visual-search-circle',
    target: 'img/006.png',
    foil: ['img/014.png', 'img/015.png', 'img/022.png','img/028.png','img/030.png','img/033.png','img/036.png'],
    fixation_image: 'img/red dot.png',
    fixation_duration: 0,
    trial_duration: 4000,
    timeline: [intro_dot, simmy]
   
  };

var intro_11 = {
    type: 'html-keyboard-response',
    stimulus: 'In the real experiment, the images will be shown much more briefly than that example. <b><p>When the images are shown, you need to stay looking at the red dot, but please pay attention to all 8 images at once!<p><b/> <p>We know it is hard because they are in your visual periphery but try your best!<p/> Shortly after the images disappear, a line will be presented, which labels which location youll be asked about later on. <p>Press space bar to continue.<p/> '
  }

var intro_12 = {
    type: 'html-keyboard-response',
    stimulus: 'After the line disappears, images will be presented a second time in a circle, and you will be asked one or two questions. <p>One question you will be asked on every trial is whether the image at the location of the line stayed the SAME, or CHANGED from the 1st to the 2nd presentation.<p> <b><p>Press space bar to try a few practice trials that focus on this question.<p/><b/>'
  }
  
 var intro_13 = {
    type: 'html-keyboard-response',
    stimulus: 'For the image the line pointed to, is it the SAME, or is it DIFFERENT from the first presentation at that location? <b><p>Press N if you think it stayed the SAME (NO CHANGE). Press C if you think it is DIFFERENT (CHANGE).<b/><p/>'
  }  
  
 var intro_14 = {
    type: 'html-keyboard-response',
    stimulus: 'Now lets get you started on a practice block to get you ready for the real experiment. In this practice block, there are two things to note: <b><p>(1)Always keep your eyes on the dot when it is on the screen! We know its tempting to look away, especially after the line has been presented, but try to stay looking at the dot.<p/><b/> <b><p>(2) Do your best to pay attention to all 8 images during the first presentation!<p/> <p>Press space to start the practice.<p/><b/> '
  }  

timeline.push(welcome_block);
timeline.push(questionPreface);
timeline.push(questionGender);
timeline.push(age);
timeline.push(intro_5);
timeline.push(intro_6);
timeline.push(intro_7);
timeline.push(intro_dot);
timeline.push(intro_dot2);
timeline.push(intro_8);
timeline.push(intro_9);
timeline.push(intro_10);
timeline.push(sim);
timeline.push(intro_11);
timeline.push(intro_12);
timeline.push(intro_13);
timeline.push(intro_14);

jsPsych.init({
    timeline: timeline,
})
