class Cat {
  elem = null;
  constructor(params) {}
  #template() {
    return ``;
  }
  #render() {
    const wrapper = document.createElement("div");
    wrapper = this.#template();
    this.elem = wrapper.firstElementChild;
  }
}
