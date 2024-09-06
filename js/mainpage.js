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

            .terminal a {
                transition: transform 0.3s, box-shadow 0.3s;
            }

            .terminal a:hover {
                transform: scale(0.99); /* Less noticeable shrink effect */
                box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.8); /* Darkens the edges */
            }

            .terminal a img {
                transition: filter 0.3s;
            }

            .terminal a:hover img {
                filter: brightness(0.8) contrast(1.1); /* Keeps the center bright while darkening edges */
            }

            .fade-out {
                opacity: 0;
                transition: opacity 1s ease;
            }

            .full-screen-iframe {
                position: fixed;
                top: 0;
                left: 0;
                width: 100vw;
                height: 100vh;
                border: none;
                z-index: 9999;
            }

            @keyframes iframeFade {
                from {
                    opacity: 0;
                }
                to {
                    opacity: 1;
                }
            }

            .iframe-container {
                position: relative;
                width: 100%;
                height: 100vh;
                overflow: hidden;
            }

            iframe {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                border: none;
                opacity: 0; /* Start with iframe hidden */
                animation: iframeFade 3s forwards; /* Apply the iframeFade animation */
            }

            #imageContainer {
                position: fixed;
                top: 0;
                left: 0;
                width: 100vw;
                height: 100vh;
                pointer-events: none;
                z-index: 9998;
                overflow: hidden;
            }

            .image {
                position: absolute;
                transition: transform 0.0s;
                transform: scale(0); /* Start with images scaled down */
            }

            .image.show {
                transform: scale(1); /* Images pop in */
            }

            .image.hide {
                transform: scale(0); /* Images pop out */
            }
        `;
        document.head.appendChild(style);

        // List of different image URLs
        const imageUrls = [
            'https://femboy.beauty/Q54ki.png',
            'https://femboy.beauty/CsG5N.png',
            'https://femboy.beauty/zbVmJ.png',
            'https://femboy.beauty/y6lZs.png',
            'https://femboy.beauty/bx7gj.png',
            'https://femboy.beauty/ZY1Te.png',
            'https://femboy.beauty/Q8xmz.png',
            'https://femboy.beauty/JWJ7g.png',
            'https://femboy.beauty/9pGJs.png',
            'https://femboy.beauty/_eDDB.png',
            'https://femboy.beauty/g7zzI.png',
            'https://femboy.beauty/GZ7qL.png',
            'https://femboy.beauty/NSffk.png',
            'https://femboy.beauty/HphS3.png',
            'https://femboy.beauty/kFfQy.png',
            'https://femboy.beauty/ddDaB.png',
            'https://femboy.beauty/v5TW8.png',
            'https://femboy.beauty/t4YvQ.png',
            'https://femboy.beauty/Hr0Ga.png',
            'https://femboy.beauty/3e3JA.png',
            'https://femboy.beauty/SpntO.png',
            'https://femboy.beauty/j4Fjm.png',
            'https://femboy.beauty/h7X9c.png',
            'https://femboy.beauty/cbdeu.png',
            'https://femboy.beauty/JgunQ.png',
            'https://femboy.beauty/1gvyu.png',
            'https://femboy.beauty/ToQys.png',
            'https://femboy.beauty/T59lJ.png',
            'https://femboy.beauty/KfR-y.png',
            'https://femboy.beauty/-7XwY.png'
        ];

        // Shuffle the image URLs to randomize their order
        const shuffledUrls = imageUrls.sort(() => 0.5 - Math.random());

        const totalArea = window.innerWidth * window.innerHeight;
        const imageCount = 30;

        // Create container for images
        const container = document.createElement('div');
        container.id = 'imageContainer';
        document.body.appendChild(container);

        // Generate and append image elements
        for (let i = 0; i < imageCount; i++) {
            const img = document.createElement('img');
            img.src = shuffledUrls[i % shuffledUrls.length];
            img.classList.add('image');
            container.appendChild(img);
        }

        const images = document.querySelectorAll('.image');

        // Load all images first to get their natural size for aspect ratio
        images.forEach((img) => {
            img.onload = function() {
                const originalWidth = img.naturalWidth;
                const originalHeight = img.naturalHeight;
                const aspectRatio = originalWidth / originalHeight;

                // Scale images between 1.5 and 2.5 times their original size
                const scaleFactor = Math.random() * (1.1 - 1.7) + 1.2;
                const scaledWidth = originalWidth * scaleFactor;
                const scaledHeight = originalHeight * scaleFactor;

                img.style.width = `${scaledWidth}px`;
                img.style.height = `${scaledHeight}px`;

                const randomTop = Math.random() * (window.innerHeight - scaledHeight);
                const randomLeft = Math.random() * (window.innerWidth - scaledWidth);

                img.style.top = `${randomTop}px`;
                img.style.left = `${randomLeft}px`;
                img.style.position = 'absolute';
            };
        });

        // Pop up images in sequence with 0.1s delay between each (no fade)
        images.forEach((img, index) => {
            setTimeout(() => {
                img.classList.add('show');
            }, index * 100); // 100ms delay between each image showing
        });

        // Wait until all images are visible, then start hiding in reverse order
        setTimeout(() => {
            images.forEach((img, index) => {
                setTimeout(() => {
                    img.classList.add('hide');
                }, (images.length - index - 1) * 100); // Reverse order hiding
            });
        }, 4000); // Wait 3 seconds after all images have appeared



        terminal.classList.add('hidden');

        setTimeout(() => {
            terminal.innerHTML = `
                <div class="fade-in" style="display: flex; height: 100vh; box-sizing: border-box; gap: 10px;">
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
                    <div style="height: 79%; width: 30%; display: flex; flex-direction: column; box-sizing: border-box; gap: 10px;">
                        <div style="height: 40%; width: 100%; display: flex; flex-direction: column; justify-content: center; padding: 10px; box-sizing: border-box; border: 2px solid yellow; background: rgba(255, 255, 255, 0.1); font-size: 0.9em; color: white;">
                            <a id="open-internal-computer" href="https://pryzuminternalcomputer.co.uk" style="display: block; width: 100%; height: 100%; position: relative; text-decoration: none;">
                                <img src="https://femboy.beauty/G-Lae.png" style="width: 100%; height: 100%; object-fit: cover;" alt="Interactive Map">
                                <span style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: white; font-size: 1.2rem; text-shadow: 0 0 5px rgba(0, 0, 0, 0.8);">Open Internal Computer</span>
                            </a>
                        </div>
                        <div style="height: 60%; width: 100%; display: flex; flex-direction: column; justify-content: center; padding: 10px; box-sizing: border-box; border: 2px solid yellow; background: rgba(255, 255, 255, 0.1); font-size: 0.9em; color: white;">
                            <a href="https://interactive-map-link.com" style="display: block; width: 100%; height: 100%; position: relative; text-decoration: none;">
                                <img src="https://femboy.beauty/1OlmF.png" style="width: 100%; height: 100%; object-fit: cover;" alt="Interactive Map">
                                <span style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: white; font-size: 1.2rem; text-shadow: 0 0 5px rgba(0, 0, 0, 0.8);">Open Interactive Map</span>
                            </a>
                        </div>
                    </div>
                    <div style="height: 80%; width: 40%; display: flex; flex-direction: column; box-sizing: border-box; gap: 10px;">
                        <div class="scrollable-element" style="flex: 1; padding: 10px; border: 2px solid yellow; background: rgba(255, 255, 255, 0.1); font-size: 0.9em; color: white; height: calc(50vh - 20px); overflow-y: auto;">
                            <h3>Announcements:</h3>
                            <p>05/09/2024: Website Updates!!! I'm working hard on the site almost daily, major updates to the sites will be posted here. If you want something added, please send me an email <3</p>
                            <p>05/09/2024: Added New Internal Files section!!! If you want files to be uploaded here, please email me and I will upload them ASAP :3</p>
                            <p>05/09/2024: Currently working on a new interactive map I will update soon when it is ready</p>
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
            terminal.classList.remove('hidden');

            // Add event listener for the "Open Internal Computer" link
            document.getElementById('open-internal-computer').addEventListener('click', function(e) {
                e.preventDefault();  // Prevent default link behavior
                terminal.classList.add('fade-out');

                setTimeout(() => {
                    terminal.innerHTML = '';  // Clear terminal content
                    const iframe = document.createElement('iframe');
                    iframe.src = this.href;  // Load iframe with the link's href
                    iframe.classList.add('full-screen-iframe');  // Make iframe fullscreen
                    document.body.appendChild(iframe);  // Append iframe to body
                }, 1000);  // Wait for fade-out effect to complete
            });
        }, 1000);
    } else {
        alert('Incorrect password. Please try again.');
    }
}

 