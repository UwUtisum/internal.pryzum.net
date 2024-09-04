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
        <div style="display: flex; justify-content: space-between;">
          <div style="width: 60%;">
            <img src="https://femboy.beauty/HDnGf.png" width="400" height="100" alt="PryzumLogo">
            <h1>Welcome agent!</h1>
            <p class="output">Admin tools:</p>
            <p class="output">See <a href="./responses">Vetting Forum Responces</a></p>
            <p class="output">See <a href="./Internal_Files">Internal Pryzum Files (New)</a></p>
            <p class="output">See <a href="https://files.pryzum.net/Documents/Public_Reports/Pryzum_AGENT_INTEL_REPORT_TEMPLATE.pdf">Intel Report Template</a></p>
            <br>
            <p class="output">Useful Links:</p>
            <p class="output">Main Site: <a href="https://pryzum.net">pryzum.net</a></p>
            <p class="output">Public files site: <a href="https://files.pryzum.net">files.pryzum.net</a></p>
            <p class="output">Recruitment site: <a href="https://recruitment.pryzum.net">recruitment.pryzum.net</a></p>
          </div>
          <div style="width: 35%; display: flex; flex-direction: column; justify-content: space-between;">
            <div style="flex: 1; padding: 10px; border: 2px solid yellow; background: rgba(255, 255, 255, 0.1); font-size: 0.9em; color: white; margin-bottom: 8px;">
              <h3>Announcements:</h3>
              <p>05/09/2024: Website Updates!!! im working hard on the site almost daily, major updates to the sites will be posted here, if you want somthing to be added please please please send me an email <3</p>
              <p>05/09/2024: Added New Internal Files section!!! if you want files to be uploaded here please Email me and i will upload them ASAP :3</p>
            </div>
            <div style="flex: 1; display: flex;">
              <div style="flex: 1; padding: 10px; border: 2px solid yellow; background: rgba(255, 255, 255, 0.1); font-size: 0.9em; color: white; margin-right: 8px;">
                <h3>Current Pryzum Deployments:</h3>
                <p>Deployments list TBA</p>
              </div>
              <div style="flex: 1; padding: 10px; border: 2px solid yellow; background: rgba(255, 255, 255, 0.1); font-size: 0.9em; color: white;">
                <h3>Current Shitlist Targets:</h3>
                <p>shitlist is being reworked as of right now</p>
                <p>section will be updated soon with new list and link to targets files</p>
              </div>
            </div>
          </div>
        </div>
      `;
      terminal.classList.remove('hidden'); // Fade in the new content
    }, 1000); // Wait for the fade-out to complete before updating content
  } else {
    alert('Incorrect password. Please try again.');
  }
}
