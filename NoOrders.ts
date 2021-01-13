import { Action } from '@civ-clone/core-unit/Action';

export class NoOrders extends Action {
  perform() {
    this.unit().moves().subtract(this.unit().moves());
  }
}

export default NoOrders;
