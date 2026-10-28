window.addEventListener('heyflow-screen-view', (event) => {
    // console.log('heyflow screen view:', event.detail);
});

window.addEventListener('heyflow-submit', (event) => {
    // console.log('heyflow submit:', event.detail);
});


(function () {
  // Wait until body is available
  function insertBanner() {
    if (!document.body) {
      return requestAnimationFrame(insertBanner);
    }

    /* ------------------------------
          1. Add Google Font <link>
    ------------------------------ */
    const fontLink = document.createElement("link");
    fontLink.rel = "stylesheet";
    fontLink.href =
      "https://fonts.googleapis.com/css2?family=Zalando+Sans:ital,wght@0,200..900;1,200..900&display=swap";
    fontLink.id = "Zalando Sans";
    document.head.appendChild(fontLink);

    /* ------------------------------
          2. Add CSS <style>
    ------------------------------ */
    const style = document.createElement("style");
    style.textContent = `

#cc-id-yyRgh7KHBL9I {
  padding: 1px;
  font-size: 20px;
  font-family: Helvetica, serif;
}

.sec-max-width {
  max-width: 1160px !important;
}

.fk-row {
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  flex-wrap: nowrap;
  padding: 1px;
  height: auto;
  max-width: 100%;
}

.fk-col {
  min-height: 25px;
  padding: 1px;
  flex-grow: 1;
  width: min-content;
}

#cc-id-LfgeRxROGnHa {
  background-attachment: scroll;
  background-image: url("https://assets.checkoutchamp.com/6268c110-51ef-11ee-829f-ebd76c9929a3/1765552224218_top_banner_bg_desktop.5ad3c577.avif");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 0;
  margin-top: 0;
  position: relative;
  overflow: hidden;
  justify-content: center;
  align-items: stretch;
  flex-wrap: nowrap;
}

#cc-id-em9Qn8Q8y08v {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: nowrap;
  padding: 0;
  height: 90px;
}

#cc-id-1vk48wG6XIgp {
  width: auto;
  padding: 0;
}

#cc-id-OzraqZ4EEm9P {
  padding: 1px;
  font-size: 24px;
  font-family: DM Sans;
  font-weight: 700;
  line-height: 28px;
  color: rgba(255, 255, 255, 1);
  text-decoration-color: rgba(255, 255, 255, 1);
}

#cc-id-S2MRnfomyx95 {
  padding: 0px;
  width: auto;
}

#cc-id-NtqjynseiQyi {
  padding: 1px;
  font-size: 24px;
  font-family: lexend;
  font-weight: 700;
  line-height: 28px;
  color: rgba(255, 255, 255, 1);
  text-decoration-color: rgba(255, 255, 255, 1);
  display: block;
}

#cc-id-vrM8GNU1gv7F {
  width: 170px;
  margin-left: 0;
  margin-right: 40%;
  height: 170px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  padding: 0 15px 0 15px;
  top: -40px;
  right: -40px;
  position: absolute;
  border-radius: 50%;
  margin-top: 0;
  background-color: rgba(255, 255, 255, 1);
  color: rgba(255, 255, 255, 1);
  text-decoration-color: rgba(255, 255, 255, 1);
}

#cc-id-RNnXuNWDZJBW {
  padding: 1px;
  font-size: 16px;
  font-family: lexend;
  font-weight: 600;
  color: rgb(255, 49, 79);
  line-height: 24px;
  text-decoration-color: rgb(255, 49, 79);
}

#cc-id-MZ1AJawFdfl2 {
  padding: 1px;
  font-size: 56px;
  font-family: lexend;
  font-weight: bold;
  color: rgb(255, 49, 79);
  line-height: 56px;
  text-decoration-color: rgb(255, 49, 79);
}

#cc-id-nutn8xJesvfW {
  padding: 1px;
  font-size: 32px;
  font-family: lexend;
  font-weight: 400;
  color: rgb(255, 255, 255);
  line-height: 38px;
}

@media only screen and (min-width: 993px) {
  #cc-id-OzraqZ4EEm9P {
    display: none;
  }
}

@media (max-width: 992px) {
  #cc-id-em9Qn8Q8y08v {
    justify-content: space-between;
    padding-left: 10px;
  }
  #cc-id-vrM8GNU1gv7F {
    justify-content: center;
    align-items: center;
    margin-right: 3%;
    right: 0px;
  }
  #cc-id-OzraqZ4EEm9P {
    text-align: left;
    font-family: lexend;
  }
}

@media only screen and (min-width: 769px) and (max-width: 992px) {
  #cc-id-NtqjynseiQyi {
    display: none;
  }
}

@media (max-width: 768px) {
  .fk-row {
    flex-wrap: wrap;
  }
  .fk-col {
    flex-basis: 100%;
    display: block;
  }
}

@media only screen and (min-width: 601px) and (max-width: 768px) {
  #cc-id-NtqjynseiQyi {
    display: none;
  }
}

@media (max-width: 600px) {
  #cc-id-LfgeRxROGnHa {
    background-attachment: scroll;
    background-image: url("https://assets.checkoutchamp.com/6268c110-51ef-11ee-829f-ebd76c9929a3/1765559674073_top_banner_bg_mobile.8e76ea72.avif");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
  }
}

@media only screen and (min-width: 481px) and (max-width: 600px) {
  #cc-id-NtqjynseiQyi {
    display: none;
  }
}

@media (max-width: 480px) {
  #cc-id-LfgeRxROGnHa {
    background-attachment: local;
    background-image: url("https://assets.checkoutchamp.com/6268c110-51ef-11ee-829f-ebd76c9929a3/1765559674073_top_banner_bg_mobile.8e76ea72.avif");
    background-position: 100% 100%;
    background-repeat: no-repeat;
    background-size: cover;
  }
  #cc-id-em9Qn8Q8y08v {
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    padding-left: 10px;
    padding-right: 0;
    height: 98px;
  }
  #cc-id-1vk48wG6XIgp {
    justify-content: center;
    align-items: flex-start;
    display: flex;
    flex-direction: column;
  }
  #cc-id-nutn8xJesvfW {
    font-size: 20px;
    line-height: 26px;
  }
  #cc-id-vrM8GNU1gv7F {
    margin-left: 0;
    margin-right: 1%;
    height: 130px;
    padding: 15px;
    border-radius: 50%;
    margin-top: 7%;
    width: 130px;
    right: 0px;
  }
  #cc-id-RNnXuNWDZJBW {
    line-height: 20px;
    font-weight: 600;
  }
  #cc-id-MZ1AJawFdfl2 {
    font-size: 44px;
    line-height: 50px;
  }
  #cc-id-OzraqZ4EEm9P {
    font-size: 20px;
    line-height: 24px;
  }
}

@media only screen and (max-width: 480px) {
  #cc-id-NtqjynseiQyi {
    display: none;
  }
}


    `;
    document.head.appendChild(style);
    
    /* ------------------------------
          3. Add Your HTML Banner
    ------------------------------ */
  const banner = document.createElement("div");
    banner.innerHTML = `
                  <div
      class="fk-row"
      id="cc-id-LfgeRxROGnHa"
      data-cc-mobilelarge="true"
      data-cc-mobile="true"
    >
      <div class="fk-col col sec-max-width" align="center" id="cc-id-em9Qn8Q8y08v">
        <div data-box="true" style="" id="cc-id-vrM8GNU1gv7F">
          <div data-text="text" id="cc-id-RNnXuNWDZJBW">SAVE UP TO</div>
          <div data-text="text" id="cc-id-MZ1AJawFdfl2">
            <span style="" id="cc-id-ZsJwJuMaGQNr" class="rte-styled-text"
              >60%</span
            >
          </div>
        </div>
        <div data-box="true" style="" id="cc-id-S2MRnfomyx95">
          <div data-text="text" id="cc-id-nutn8xJesvfW">New Year Sale!</div>
          <div
            data-text="text"
            id="cc-id-OzraqZ4EEm9P"
            data-cc-desktop="false"
            class="timer-countdown"
          >
            00:00:00<br class="rte-styled-text" id="" />
          </div>
        </div>
        <div
          data-text="text"
          id="cc-id-NtqjynseiQyi"
          data-cc-tabletlarge="false"
          data-cc-tablet="false"
          data-cc-mobilelarge="false"
          data-cc-mobile="false"
          class="timer-countdown"
        >
          00:00:00<br class="rte-styled-text" id="cc-id-AxlFrn91fkQe" />
        </div>
      </div>
    </div>
    `;

    document.body.prepend(banner); 

    // Countdown Timer Script
    // Format: HH:MM:SS (23:59:59)

    // ============================================
    // CONFIGURATION - CHANGE YOUR COUNTDOWN TIME HERE
    // ============================================
   const COUNTDOWN_CONFIG = {
      hours: 23,      // Change hours here (0-999)
      minutes: 59,    // Change minutes here (0-59)
      seconds: 59     // Change seconds here (0-59)
    }; 
    // ============================================

  function initializeCountdownTimers() {
      // Get all elements with the class 'timer-countdown'
      const timerElements = document.querySelectorAll('.timer-countdown');

      timerElements.forEach((element) => {
        // Calculate total seconds from config
        const totalSeconds = (COUNTDOWN_CONFIG.hours * 3600) +
                            (COUNTDOWN_CONFIG.minutes * 60) +
                            COUNTDOWN_CONFIG.seconds;

        startCountdown(element, totalSeconds);
      });
    }

    function startCountdown(element, totalSeconds) {
      let remainingSeconds = totalSeconds;

      function updateTimer() {
        if (remainingSeconds < 0) {
          element.textContent = "00:00:00";
          clearInterval(interval);
          return;
        }

        // Calculate hours, minutes, and seconds
        const hours = Math.floor(remainingSeconds / 3600);
        const minutes = Math.floor((remainingSeconds % 3600) / 60);
        const seconds = remainingSeconds % 60;

        // Format with leading zeros
        const formattedTime =
          String(hours).padStart(2, '0') + ':' +
          String(minutes).padStart(2, '0') + ':' +
          String(seconds).padStart(2, '0');

        element.textContent = formattedTime;

        remainingSeconds--;
      }

      // Update immediately
      updateTimer();

      // Update every second
      const interval = setInterval(updateTimer, 1000);
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initializeCountdownTimers);
    } else {
      initializeCountdownTimers();
    }
  }

  // Start the process
  insertBanner(); 
  
})();


