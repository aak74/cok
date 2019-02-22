import items from './mock/Knowledges';

class Knowledges {
  constructor() {
    this.items = items;
  }

  getList() {
    return this.items;
  }
}

export default Knowledges;
