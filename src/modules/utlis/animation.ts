export async function playAnim(el: HTMLElement, animation: string, delayMs = 0): Promise<void> {
    return new Promise<void>(resolve => {
      el.style.setProperty('--animate-delay', `${delayMs}ms`);
      el.classList.add('animate__animated', animation);

      function onEnd(e: AnimationEvent): void {
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