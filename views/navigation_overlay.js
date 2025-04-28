const createNavigationOverlay = () => /* html */ `
    <div id="qPopup" class="popup">
        <div class="popup-content">
            <span class="close-btn" onclick="closePopup()">&times;</span>
            <h2>Quick Search</h2>
            <p>This is your dynamically loaded popup that appears when the 'q' key is pressed.</p>
        </div>
    </div>
  `;

export default createNavigationOverlay;