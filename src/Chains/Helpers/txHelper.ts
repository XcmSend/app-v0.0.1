/// extra transactions 

import { ApiPromise } from "@polkadot/api";
import { genericRawNativeBalance } from "./AssetHelper";
import connectToWsEndpoint from "../api/connect";
import { supported_Polkadot_Chains } from "../ChainsInfo";
import endpoints from "../api/WsEndpoints";


/// spawn a subscription and wait until balance on destination 
/// account has been updated
async function spawn_native_balance_check(chain: supported_Polkadot_Chains, account: string, block_limit: number) {
	let api: ApiPromise;
	// get the api instance for the chain
	switch (chain) {
		case supported_Polkadot_Chains.polkadot:
			api = await connectToWsEndpoint(endpoints.polkadot.default);
			console.log(`Polkadot`);
			break;
		case supported_Polkadot_Chains.assethub:
			api = await connectToWsEndpoint(endpoints.polkadot.assetHub);
			break;
		case supported_Polkadot_Chains.hydradx:
			api = await connectToWsEndpoint(endpoints.polkadot.hydraDx);
			break
		}
	const original_balance = await genericRawNativeBalance(api, account);	
	let count = 0;
	const unsubscribe = await api.rpc.chain.subscribeNewHeads(async (header) => {
		console.log(`Chain is at block: #${header.number}`);
		console.log(`Checking for balance changes`);
		/// check if the free amount has changed
		const new_balance = await genericRawNativeBalance(api, account);	
		if (new_balance.free != original_balance.free) {
			console.log(`Balance has changed`);
			unsubscribe();
			process.exit(0); // change to die nicer?	
		}

		if (++count === block_limit) {
		  console.log(`block limit reached, exit...`);
		  unsubscribe();
		  process.exit(0); // change to die nicer?	
		}
	  });




	}	


/*
returns a list of paraid's
[
  1001, 1002, 2000, 2004,
  2006, 2007, 2011, 2012,
  2013, 2021, 2030, 2031,
  2032, 2034, 2035, 2040,
  2046, 2048, 2051, 2094,
  2101, 2104
]
*/
/// list open hrmp channels for parachain X on polkadot
export async function find_open_polkadot_channels(paraid: number): Promise<[number]> {
	const api = await connectToWsEndpoint('polkadot');
	const Channels = (
        (await api.query.hrmp.hrmpIngressChannelsIndex(paraid)) as any
      ).map((a) => a.toNumber());
	  console.log('ok');

	console.log(Channels);
	return Channels;
}