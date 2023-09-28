
export interface ActionData {
  target: any;
  source: any;
  actionType: ActionType | null | undefined;
  chain: string;
  assetId: number;
  address: string; 
  amount?: number; 
  nodeId?: string;
}

export interface SwapAction {
  actionType: 'swap';
  source: ActionData;
  target: ActionData;
}

export interface ReserveXAction {
  actionType: 'reserveX';
  source: ActionData;
  target: ActionData;
}

export interface TransferAction {
  actionType: 'transfer';
  source: ActionData;
  target: ActionData;
}

export type ActionType = SwapAction | ReserveXAction | TransferAction;
