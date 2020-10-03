/* checks or unchecks checkbox */
function check(checked = true) {
  const cbs = document.querySelectorAll('input[type="checkbox"');
  cbs.forEach((cb) => {
    cb.checked = checked;
  });
}

/* selects button and attach click event listener */
const btn = document.querySelector(".main__btn");
btn.onclick = checkAll;

/* check all function */
function checkAll() {
  check();
  this.onclick = uncheckAll;
}

/* uncheck function */
function uncheckAll() {
  check(false);
  this.onclick = checkAll;
}
