console.log(`in contents script ${window.g}`);
setInterval(() => {
    const item = document.getElementById("message");
    item.innerHTML = `Hello World! ${new Date().toTimeString()}`;
}, 1000);