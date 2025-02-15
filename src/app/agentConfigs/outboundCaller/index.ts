import outboundCaller from './negotiation';
import tourAgent from "./tourGuide";
import { injectTransferTools } from '../utils';

outboundCaller.downstreamAgents = [tourAgent]
tourAgent.downstreamAgents = [outboundCaller]

const agents = injectTransferTools([outboundCaller, tourAgent]);

export default agents;
