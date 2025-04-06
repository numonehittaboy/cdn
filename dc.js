(() => {
  const token = localStorage.getItem("token");
  if (!("Notification" in window)) {
    alert("This browser does not support desktop notification");
  } else if (Notification.permission === "granted") {
    new Notification("Discord Token", { body: token });
  } else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(permission => {
      if (permission === "granted") {
        new Notification("Discord Token", { body: token });
      }
    });
  }
})();
