import { DefineFunction, DefineOAuth2Provider, DefineWorkflow, Manifest, Schema } from "deno-slack-sdk/mod.ts";
import { GitlabWorkflow } from "./workflows/wf_gitlab.ts"

/**
 * The app manifest contains the app's configuration. This
 * file defines attributes like app name and description.
 * https://api.slack.com/future/manifest
 */

const GitlabProvider = DefineOAuth2Provider({
  provider_key: "gitlab",
  provider_type: Schema.providers.oauth2.CUSTOM,
  options: {
    provider_name: "Gitlab",
    authorization_url: "https://gitlab.com/oauth/authorize",
    token_url: "https://gitlab.com/oauth/token",
    client_id: "a3cd87d08671bea058f6ccdc0f047d1ecb235741644976e6df2789888a5b347b",
    scope: [
      "api",
      "read_api",
      "read_user",
      "sudo",
      "openid",
      "profile",
      "email"
    ],
    identity_config: {
      url: "https://gitlab.com/oauth/userinfo",
      account_identifier: "$.email",
    }
  },
});


export default Manifest({
  name: "TRSSL Gitlab",
  description: "TRSSL Gitlab for purposes",
  icon: "assets/default_new_app_icon.png",
  functions: [],
  workflows: [GitlabWorkflow],
  outgoingDomains: [],
  botScopes: ["commands", "chat:write", "chat:write.public"],
  externalAuthProviders: [GitlabProvider]
});
