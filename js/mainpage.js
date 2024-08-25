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
          <img src="https://femboy.beauty/uWbPJ.png" width="100" height="100" alt="PryzumLogo">
          <h1>Welcome!</h1>
          <p class="output">You have successfully entered the correct password.</p>
          <p class="output">The site is now accessible.</p>
        `;
        terminal.classList.remove('hidden'); // Fade in the new content
      }, 1000); // Wait for the fade-out to complete before updating content
    } else {
      alert('Incorrect password. Please try again.');
    }
  }