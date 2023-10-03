import { ActionType } from "./ActionInterface";

export function processAction(action: ActionType) {
    switch (action.actionType) {
      case 'swap':
        // Here, TypeScript knows that "action" has the shape of "SwapAction"
        break;
      case 'xTransfer':
        // Here, TypeScript knows that "action" has the shape of "xTransferAction"
        break;
      case 'transfer':
        // Here, TypeScript knows that "action" has the shape of "TransferAction"
        break;
    }
  }
  