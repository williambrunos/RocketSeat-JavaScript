const transformNoteToClass = () => {
  const note = document.getElementById('nota').value;
  let classe;
  if (note >= 90) {
    classe = 'A';
  } else if (note >= 80) {
    classe = 'B';
  } else if (note >= 70) {
    classe = 'C';
  } else if(note >= 60) {
    classe = 'D';
  } else {
    classe = 'F';
  }

  document.getElementById('output').innerHTML = classe;
}