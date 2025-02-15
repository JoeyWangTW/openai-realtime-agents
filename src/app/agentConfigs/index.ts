import { AllAgentConfigsType } from "@/app/types";
import outboundCaller from "./outboundCaller";
import customerServiceRetail from "./customerServiceRetail";
import simpleExample from "./simpleExample";

export const allAgentSets: AllAgentConfigsType = {
  outboundCaller,
  customerServiceRetail,
  simpleExample,
};

export const defaultAgentSetKey = "simpleExample";
