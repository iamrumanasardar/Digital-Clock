function updateClock() {
    const now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    let ampm = h >=12 ? 'PM' : 'AM' ;

      h = h % 12 || 12;
  h = h < 10 ? '0' + h : h;
  m = m < 10 ? '0' + m : m;
  s = s < 10 ? '0' + s : s;

  document.getElementById("time").textContent = `${h}:${m}:${s} ${ampm}`;
}
setInterval(updateClock,1000);
updateClock();