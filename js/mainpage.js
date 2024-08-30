function rot47(str) {
  return str.replace(/[\x21-\x7E]/g, function(c) {
    return String.fromCharCode(33 + ((c.charCodeAt(0) + 14) % 94));
  });
}

function checkPassword() {
  const p1 = document.getElementById('password').value;
  const p2 = 'ACJKF>:?E6C?2=<6Jiii`aa_bcg`afb`nsL$utxszu$"';
  const p3 = rot47(p1);

  if (p3 === p2) {
    const terminal = document.querySelector('.terminal');
    terminal.classList.add('hidden');

    setTimeout(() => {
      terminal.innerHTML = `
        <img src="https://femboy.beauty/HDnGf.png" width="400" height="100" alt="PryzumLogo">
        <h1>Welcome agent!</h1>
        <p class="output">Admin tools:</p>
        <p class="output">See <a href="./responses">Vetting Forum Responces</a></p>
        <p class="output">See <a href="https://internal.pryzum.net">Internal Documents (TBA)</a></p>
        <br>
        <p class="output">Usefull Links:</p>
        <p class="output">Main Site: <a href="https://pryzum.net">pryzum.net</a></p>
        <p class="output">Public files site: <a href="https://files.pryzum.net">files.pryzum.net</a></p>
        <p class="output">Recruitment site: <a href="https://recruitment.pryzum.net">recruitment.pryzum.net</a></p>
      `;
      terminal.classList.remove('hidden'); // Fade in the new content
    }, 1000); // Wait for the fade-out to complete before updating content
  } else {
    alert('Incorrect password. Please try again.');
  }
}