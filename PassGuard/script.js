const passwordInput = document.getElementById('password');
const bar = document.getElementById('bar');
const strengthLabel = document.getElementById('strengthLabel');
const feedback = document.getElementById('feedback');

const criteria = {
  length: document.getElementById('length'),
  uppercase: document.getElementById('uppercase'),
  lowercase: document.getElementById('lowercase'),
  number: document.getElementById('number'),
  special: document.getElementById('special')
};

passwordInput.addEventListener('input', () => {
  const pwd = passwordInput.value;

  const conditions = {
    length: pwd.length >= 8,
    uppercase: /[A-Z]/.test(pwd),
    lowercase: /[a-z]/.test(pwd),
    number: /\d/.test(pwd),
    special: /[!@#$%^&*(),.?":{}|<>]/.test(pwd)
  };

  let passedCount = 0;
  for (const key in conditions) {
    if (conditions[key]) {
      criteria[key].classList.remove('failed');
      criteria[key].classList.add('passed');
      passedCount++;
    } else {
      criteria[key].classList.remove('passed');
      criteria[key].classList.add('failed');
    }
  }

  // Strength Bar
  bar.style.width = `${(passedCount / 5) * 100}%`;
  bar.style.backgroundColor =
    passedCount <= 2 ? 'red' :
    passedCount <= 4 ? 'orange' : 'limegreen';

  // Label
  strengthLabel.textContent =
    passedCount <= 2 ? 'Strength: Weak' :
    passedCount <= 4 ? 'Strength: Medium' : 'Strength: Strong';

  // Inline Feedback
  feedback.style.display = 'block';
  feedback.style.backgroundColor =
    passedCount <= 2 ? '#ff1744' :
    passedCount <= 4 ? '#ff9100' : '#2e7d32';

  feedback.textContent =
    passedCount <= 2
      ? 'Weak Password! Consider adding more variety.'
      : passedCount <= 4
      ? 'Medium Strength. Add more unique characters.'
      : 'Strong Password! Great job.';
});

// Strength Bar
bar.style.width = `${(passedCount / 5) * 100}%`;
if (passedCount <= 2) {
  bar.style.backgroundColor = 'red';
  bar.classList.remove('success');
  strengthLabel.classList.remove('success');
} else if (passedCount <= 4) {
  bar.style.backgroundColor = 'orange';
  bar.classList.remove('success');
  strengthLabel.classList.remove('success');
} else {
  bar.style.backgroundColor = 'limegreen';
  bar.classList.add('success');          // Add glow animation class
  strengthLabel.classList.add('success'); // Add checkmark icon class
}

// Label
strengthLabel.textContent =
  passedCount <= 2 ? 'Strength: Weak' :
  passedCount <= 4 ? 'Strength: Medium' : 'Strength: Strong';

// Inline Feedback
feedback.style.display = 'block';
feedback.style.backgroundColor =
  passedCount <= 2 ? '#ff1744' :
  passedCount <= 4 ? '#ff9100' : '#2e7d32';

feedback.textContent =
  passedCount <= 2
    ? 'Weak Password! Consider adding more variety.'
    : passedCount <= 4
    ? 'Medium Strength. Add more unique characters.'
    : 'Strong Password! Great job.';
