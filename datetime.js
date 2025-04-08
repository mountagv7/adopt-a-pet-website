
    function updateDateTime() {
        const now = new Date();
        document.getElementById("date-time").textContent = now.toLocaleString();
    }
    setInterval(updateDateTime, 1000);
    updateDateTime(); 

