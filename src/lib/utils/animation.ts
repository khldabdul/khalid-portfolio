/* AOS custom setup - animation on scroll */
import AOS from 'aos';
import 'aos/dist/aos.css';

export function initAOS() {
  if (typeof window !== 'undefined') {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
      easing: 'ease-in-out',
      delay: 100,
    });
  }
}

export function updateAOS() {
  if (typeof window !== 'undefined' && AOS) {
    AOS.refresh();
  }
}
