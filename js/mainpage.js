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
      // Insert custom scrollbar styles into the document head
      const style = document.createElement('style');
      style.textContent = `
        ::-webkit-scrollbar {
          width: 12px;
          height: 12px;
        }

        ::-webkit-scrollbar-track {
          background: transparent;
        }

        ::-webkit-scrollbar-thumb {
          background: yellow;
          border-radius: 10px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #f39c12;
        }

        ::-webkit-scrollbar-button {
          display: none;
        }

        .scrollable-element {
          scrollbar-width: thin;
          scrollbar-color: yellow transparent;
        }
      `;
      document.head.appendChild(style);

      terminal.innerHTML = `
        <div style="display: flex; height: 100vh; box-sizing: border-box; gap: 10px;">
          <!-- First div with adjusted width -->
          <div style="width: 40%; padding: 10px; box-sizing: border-box;">
            <img src="https://femboy.beauty/HDnGf.png" width="400" height="100" alt="PryzumLogo">
            <h1>Welcome agent!</h1>
            <p class="output">Admin tools:</p>
            <p class="output">See <a href="./responses">Vetting Forum Responses</a></p>
            <p class="output">See <a href="./Internal_Files">Internal Pryzum Files (New)</a></p>
            <p class="output">See <a href="https://files.pryzum.net/Documents/Public_Reports/Pryzum_AGENT_INTEL_REPORT_TEMPLATE.pdf">Intel Report Template</a></p>
            <br>
            <p class="output">Useful Links:</p>
            <p class="output">Main Site: <a href="https://pryzum.net">pryzum.net</a></p>
            <p class="output">Public files site: <a href="https://files.pryzum.net">files.pryzum.net</a></p>
            <p class="output">Recruitment site: <a href="https://recruitment.pryzum.net">recruitment.pryzum.net</a></p>
          </div>
          <!-- Adjusted width for the interactive map box and image covering the box -->
          <div style="height: 80%; width: 25%; display: flex; flex-direction: column; justify-content: center; padding: 10px; box-sizing: border-box; border: 2px solid yellow; background: rgba(255, 255, 255, 0.1); font-size: 0.9em; color: white;">
            <a href="https://interactive-map-link.com" style="display: block; width: 100%; height: 100%; position: relative; text-decoration: none;">
              <img src="https://femboy.beauty/1OlmF.png" style="width: 100%; height: 100%; object-fit: cover;" alt="Interactive Map">
              <span style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: white; font-size: 1.2rem; text-shadow: 0 0 5px rgba(0, 0, 0, 0.8);">Open Interactive Map</span>
            </a>
          </div>
          <div style="height: 80%; width: 40%; display: flex; flex-direction: column; box-sizing: border-box;">
            <div class="scrollable-element" style="flex: 1; padding: 10px; border: 2px solid yellow; background: rgba(255, 255, 255, 0.1); font-size: 0.9em; color: white; margin-bottom: 8px; height: calc(50vh - 20px); overflow-y: auto;">
              <h3>Announcements:</h3>
              <p>05/09/2024: Website Updates!!! I'm working hard on the site almost daily, major updates to the sites will be posted here. If you want something added, please send me an email <3</p>
              <p>05/09/2024: Added New Internal Files section!!! If you want files to be uploaded here, please email me and I will upload them ASAP :3</p>
              <p>05/09/2024: Currently working on a new interactive map i will update soon when it is ready</p>
            </div>
            <div class="scrollable-element" style="flex: 1; display: flex; gap: 10px; height: calc(50vh - 20px); overflow-y: auto;">
              <div style="flex: 1; padding: 10px; border: 2px solid yellow; background: rgba(255, 255, 255, 0.1); font-size: 0.9em; color: white;">
                <h3>Current Pryzum Deployments:</h3>
                <p>Deployments list TBA</p>
              </div>
              <div style="flex: 1; padding: 10px; border: 2px solid yellow; background: rgba(255, 255, 255, 0.1); font-size: 0.9em; color: white;">
                <h3>Current Shitlist Targets:</h3>
                <p>Shitlist is being reworked as of right now</p>
                <p>Section will be updated soon with new list and link to targets files</p>
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








