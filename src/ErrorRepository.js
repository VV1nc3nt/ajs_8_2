export default class ErrorRepository {
  constructor() {
    this.errors = new Map([
      ['400', 'https://http.cat/400'],
      ['401', 'https://http.cat/401'],
      ['402', 'https://http.cat/402'],
      ['403', 'https://http.cat/403'],
      ['404', 'https://http.cat/404'],
      ['405', 'https://http.cat/405'],
    ]);
  }

  translate(code) {
    if (this.errors.has(code)) {
      return this.errors.get(code);
    }
    return 'Unknown error';
  }
}
