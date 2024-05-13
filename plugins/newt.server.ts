import fetchAdapter from "@vespaiach/axios-fetch-adapter";
import { createClient } from "newt-client-js";

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();
  const newtClient = createClient({
    spaceUid: config.newt.spaceUid,
    token: config.newt.cdnApiToken,
    apiToken: config.newt.apiToken,
    apiType: "cdn",
    adapter: fetchAdapter,
  });
  return {
    provide: {
      newtClient,
    },
  };
});
