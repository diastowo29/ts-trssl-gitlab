import { Trigger } from "deno-slack-sdk/types.ts";
import GitlabWorkflow from "../workflows/wf_gitlab.ts";
import { TriggerContextData, TriggerTypes } from "deno-slack-api/mod.ts";
/**
 * Triggers determine when workflows are executed. A trigger
 * file describes a scenario in which a workflow should be run,
 * such as a user pressing a button or when a specific event occurs.
 * https://api.slack.com/automation/triggers
 */
const sampleTrigger: Trigger<typeof GitlabWorkflow.definition> = {
  type: TriggerTypes.Shortcut,
  name: "Sample trigger",
  description: "A sample trigger",
  workflow: `#/workflows/${GitlabWorkflow.definition.callback_id}`,
  inputs: {
    channel: {
      value: TriggerContextData.Shortcut.channel_id,
    },
    user: {
      value: TriggerContextData.Shortcut.user_id,
    },
  },
};

export default sampleTrigger;
