import authentication from "./authentication";
import recruiterInfo from "./recruiterInfo";
import scheduler from "./scheduler";
import { injectTransferTools } from "../utils";

authentication.downstreamAgents = [recruiterInfo, scheduler];
recruiterInfo.downstreamAgents = [authentication, scheduler];
scheduler.downstreamAgents = [authentication, recruiterInfo];

const agents = injectTransferTools([authentication, recruiterInfo, scheduler]);

export default agents; 