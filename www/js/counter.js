// Estado global do contador: um único valor compartilhado por todas as telas.
// Como o número mora aqui (e não dentro de cada página), ele continua o mesmo
// ao navegar de uma tela para outra.
const CounterStore = {
  value: 0,
  listeners: new Set(),

  increment() { this.set(this.value + 1); },
  decrement() { this.set(this.value - 1); },

  set(newValue) {
    this.value = newValue;
    this.listeners.forEach((fn) => fn(this.value));
  },

  subscribe(fn) {
    this.listeners.add(fn);
    return () => this.listeners.delete(fn);
  }
};

// <app-counter></app-counter>: componente reutilizado em todas as telas.
// Ele lê e altera o CounterStore, então todas as instâncias mostram o mesmo número.
class AppCounter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="counter">
        <ion-button color="medium" class="counter-minus">−</ion-button>
        <span class="counter-value">${CounterStore.value}</span>
        <ion-button class="counter-plus">+</ion-button>
      </div>
    `;

    this.valueEl = this.querySelector('.counter-value');
    this.querySelector('.counter-minus')
      .addEventListener('click', () => CounterStore.decrement());
    this.querySelector('.counter-plus')
      .addEventListener('click', () => CounterStore.increment());

    // Mantém o número atualizado mesmo com a tela guardada na pilha do Ionic.
    this.unsubscribe = CounterStore.subscribe((v) => {
      this.valueEl.textContent = v;
    });
  }

  disconnectedCallback() {
    if (this.unsubscribe) this.unsubscribe();
  }
}

customElements.define('app-counter', AppCounter);
