"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoOrders = void 0;
const Action_1 = require("@civ-clone/core-unit/Action");
class NoOrders extends Action_1.Action {
    perform() {
        this.unit().moves().subtract(this.unit().moves());
    }
}
exports.NoOrders = NoOrders;
exports.default = NoOrders;
//# sourceMappingURL=NoOrders.js.map