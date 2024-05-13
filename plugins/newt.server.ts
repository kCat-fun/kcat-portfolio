import { createClient } from "newt-client-js";

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();
  const newtClient = createClient({
    spaceUid: useRuntimeConfig().public.spaceUid,
    token: useRuntimeConfig().public.cdnApiToken,
    // apiToken: config.newt.apiToken,
    apiType: "cdn",
  });
  return {
    provide: {
      newtClient,
    },
  };
});
