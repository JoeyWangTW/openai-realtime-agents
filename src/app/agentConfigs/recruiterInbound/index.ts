import authentication from "./authentication";
import recruiterInfo from "./recruiterInfo";
import { injectTransferTools } from "../utils";

authentication.downstreamAgents = [recruiterInfo];
recruiterInfo.downstreamAgents = [authentication];

const agents = injectTransferTools([authentication, recruiterInfo]);

export default agents; 