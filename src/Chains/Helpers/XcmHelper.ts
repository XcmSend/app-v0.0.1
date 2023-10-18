import connectToWsEndpoint from "../api/connect";


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
export async function find_ingress_polkadot_channels(paraid: number): Promise<[number]> {
	const api = await connectToWsEndpoint('polkadot');
	const Channels = (
        (await api.query.hrmp.hrmpIngressChannelsIndex(paraid)) as any
      ).map((a) => a.toNumber());

	return Channels;
}

export async function find_engress_polkadot_channels(paraid: number): Promise<[number]> {
	const api = await connectToWsEndpoint('polkadot');
	const Channels = (
        (await api.query.hrmp.hrmpEgressChannelsIndex(paraid)) as any
      ).map((a) => a.toNumber());

	return Channels;
}

/// take input chain and dest chain and check if they got open hrmp channels 
/// input: source chain paraid, dest chain paraid
export async function polkadot_parachain_channel_check(sourceparaid: number, destchain: number): Promise<boolean> {
    const s_ingress = await find_ingress_polkadot_channels(sourceparaid);
    const s_egress = await find_engress_polkadot_channels(sourceparaid);

    if (s_ingress.includes(destchain) && s_egress.includes(destchain)) {
        return true;
    }

    return false;

}