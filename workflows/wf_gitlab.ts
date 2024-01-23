// /workflows/create_welcome_message.ts
import {DefineWorkflow, Schema} from "deno-slack-sdk/mod.ts";
import {gitlabSample} from '../functions/f_gitlab.ts';
// import {messageBlock} from '../block/message_block.ts';

/**
 * The MessageSetupWorkflow opens a form where the user creates a
 * welcome message. The trigger for this workflow is found in
 * `/triggers/welcome_message_trigger.ts`
 */
export const GitlabWorkflow = DefineWorkflow({
    callback_id: "gitlab_workflow",
    title: "Gitlab Workflow",
    description: "Sample Gitlab Workflow",
    input_parameters: {
        properties: {
            channel: {
                type: Schema.slack.types.channel_id
            },
            user: {
                type: Schema.slack.types.user_id
            }
        },
        required: ["channel", "user"]
    }
});

GitlabWorkflow.addStep(gitlabSample, {
    channel: GitlabWorkflow.inputs.channel,
    user: GitlabWorkflow.inputs.user
});

export default GitlabWorkflow;