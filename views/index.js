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
            
            <div id="popup-container"></div>
            
            <script>
                document.addEventListener('keydown', function(event) {
                    if (event.key === '\`' || event.key === '~') {
                        htmx.ajax('GET', '/navigationoverlay', {target:'#popup-container', swap:'innerHTML'});
                        setTimeout(() => {
                            const popup = document.querySelector('.popup');
                            if (popup) popup.style.display = 'flex';
                        }, 100);
                    }
                    
                    if (event.key === 'Escape') {
                        const popup = document.querySelector('.popup');
                        if (popup) popup.style.display = 'none';
                    }
                });
                
                function closePopup() {
                    const popup = document.querySelector('.popup');
                    if (popup) popup.style.display = 'none';
                }
            </script>
        </body>
    </html>
`;

export default createHomePageTemplate;