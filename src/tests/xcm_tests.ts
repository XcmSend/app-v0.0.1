/// test related to xcm functionality

import { find_open_polkadot_channels } from '../Chains/Helpers/txHelper';
import { CHAIN_METADATA } from '../Chains/api/metadata';


async function assethub_test(){
    const paraid = 1000;
    const open_channels: [number] = await find_open_polkadot_channels(paraid);
    return open_channels;
}

assethub_test();