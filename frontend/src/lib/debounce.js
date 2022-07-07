/**
 * Debouncer used to prevent a component from performing re-renders too quickly
 * @param {Function} fn - Function you want to trigger on debounce
 * @param {Number} ms - Amount of milliseconds to wait before being able to trigger function
 * @returns
 */
function debounce(fn, ms) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

export default debounce;
