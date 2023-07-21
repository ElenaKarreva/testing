import Render from './Render';
import Validator from './Validator';

const cardValidator = new Validator();
const render = new Render('form', cardValidator);

cardValidator.addCard('Visa', 'visa');
cardValidator.addCard('MasterCard', 'master');
cardValidator.addCard('American Express', 'amex');
cardValidator.addCard('MIR', 'mir');
cardValidator.addCard('Discover', 'discover');
cardValidator.addCard('JCB', 'jcb');
cardValidator.addCard('Diners Club', 'diners_club');
