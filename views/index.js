const createHomePageTemplate = () => /* html */`
    <html>
        <head>
            <title>Home</title>
            <script src="https://unpkg.com/htmx.org@2.0.4" integrity="sha384-HGfztofotfshcF7+8n44JQL2oJmowVChPTg48S+jvZoztPfvwD79OC/LTtG6dMp+" crossorigin="anonymous"></script>
            <style>
                /* Popup styles */
                .popup {
                    display: none;
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0, 0, 0, 0.5);
                    z-index: 1000;
                    justify-content: center;
                    align-items: center;
                }
                
                .popup-content {
                    background-color: white;
                    padding: 20px;
                    border-radius: 5px;
                    max-width: 500px;
                    width: 100%;
                    position: relative;
                }
                
                .close-btn {
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    cursor: pointer;
                    font-size: 18px;
                    font-weight: bold;
                }
            </style>
        </head>
        <body>
            <header>
                <h1>Eldr1tch.tech</h1>
            </header>

            <main>
                <h1>Welcome to Eldr1tch.tech</h1>
            </main>
            
            <!-- Popup/Modal -->
            <div id="qPopup" class="popup">
                <div class="popup-content">
                    <span class="close-btn" onclick="closePopup()">&times;</span>
                    <h2>Quick Search</h2>
                    <p>This is your popup that appears when the 'q' key is pressed.</p>
                    <!-- Add your content here -->
                </div>
            </div>
            
            <script>
                // Function to open the popup
                function openPopup() {
                    document.getElementById('qPopup').style.display = 'flex';
                }
                
                // Function to close the popup
                function closePopup() {
                    document.getElementById('qPopup').style.display = 'none';
                }
                
                // Event listener for keyboard events
                document.addEventListener('keydown', function(event) {
                    // Check if the pressed key is 'q' (keyCode 81)
                    if (event.key === 'q' || event.key === 'Q') {
                        openPopup();
                    }
                    
                    // Close popup when Escape key is pressed
                    if (event.key === 'Escape') {
                        closePopup();
                    }
                });
            </script>
        </body>
    </html>
`;

export default createHomePageTemplate;