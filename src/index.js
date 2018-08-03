var IpaDistance = require("ipa-distance");
var distance = new IpaDistance().create();

window.onload = () => {
  this.inputNode1 = document.querySelector('#input1');
  this.inputNode2 = document.querySelector('#input2');
  this.resultNode = document.querySelector('#result');

  document.querySelector('#btn').onclick =
    () => {
      let ipa1 = this.inputNode1.value;
      let ipa2 = this.inputNode2.value;
      let result = distance.compute(ipa1, ipa2);

      this.resultNode.textContent = result;
    };
}