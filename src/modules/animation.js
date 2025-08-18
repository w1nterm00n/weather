export async function playAnim(el, animation, delayMs = 0) {
    console.log("anim");
    return new Promise(resolve => {
      el.style.setProperty('--animate-delay', `${delayMs}ms`);
      el.classList.add('animate__animated', animation);

      function onEnd(e) {
        e.stopPropagation();
        el.classList.remove('animate__animated', animation);
        el.style.removeProperty('--animate-delay');
        el.style.opacity = '1';
        el.removeEventListener('animationend', onEnd);
        resolve();
      }
      el.addEventListener('animationend', onEnd, { once: true });
    });
  }

