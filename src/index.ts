export { lifecycle } from "./forge/lifecycle";

import type { EchoContextPayload } from "./actionpayload";
import { truncateEvents } from "./forge/logging";
import {
  buildResponse,
  type Response,
  type WebtriggerEvent,
} from "./forge/trigger";

export async function trigger(req: WebtriggerEvent): Promise<Response> {
  console.debug(
    `Context token (invocation identification) for invocation of trigger: ${truncateEvents(req.contextToken)}`,
  );
  /*
  const projectRequest = JSON.parse(req.body) as FetchProjectWbsPayload;
  projectRequest.context = req.context;
  const yamlDoc = await fetchWbsContentFromProject(projectRequest);
  */
  const res: Response = buildResponse();
  // console.debug(`response: ${JSON.stringify(res)}`);
  return res;
}

export function echoRequest(req: EchoContextPayload): string {
  console.debug(`req: ${truncateEvents(req)}`);
  return JSON.stringify(req);
}
