export default class Card {
  constructor(cardName, cardClass) {
    this.cardName = cardName;
    this.cardClass = cardClass;
    this.cardElement = null;
    this.startWithNums = null;
    this.numLength = null;

    this.validLength = false;
    this.validStartNums = false;

    this.identifyCardParam();
    this.renderCard();
  }

  identifyCardParam() {
    if (this.cardName === 'Visa') {
      this.startWithNums = ['4'];
      this.numLength = ['13', '16', '19'];
    } else if (this.cardName === 'MasterCard') {
      this.startWithNums = ['51', '52', '53', '54', '55', '222100', '272099'];
      this.numLength = ['16'];
    } else if (this.cardName === 'American Express') {
      this.startWithNums = ['34', '37'];
      this.numLength = ['15'];
    } else if (this.cardName === 'MIR') {
      this.startWithNums = ['2'];
      this.numLength = ['16'];
    } else if (this.cardName === 'Discover') {
      this.startWithNums = ['6011', '622', '644', '645', '646', '647', '648', '649', '65'];
      this.numLength = ['16', '17', '18', '19'];
    }else if (this.cardName === 'Diners Club') {
      this.startWithNums = ['36', '300', '301', '302', '303', '304', '305'];
      this.numLength = ['14', '16'];
    }else if (this.cardName === 'JCB') {
      this.startWithNums = ['35'];
      this.numLength = ['16', '17', '18', '19'];
    }
  }

  renderCard() {
    const cards = document.querySelector('.cards');
    const li = document.createElement('li');
    const card = document.createElement('span');

    card.classList.add('card', this.cardClass);
    card.title = this.cardName;

    li.appendChild(card);
    cards.appendChild(li);

    this.cardElement = card;
  }
}
