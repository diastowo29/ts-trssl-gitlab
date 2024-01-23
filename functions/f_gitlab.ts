import {DefineFunction, Schema, SlackFunction} from "deno-slack-sdk/mod.ts";

export const gitlabSample = DefineFunction({
    callback_id: "gitlab_function",
    title: "Gitlab Function",
    description: "Gitlab Function Sample",
    source_file: "functions/f_gitlab.ts",
    input_parameters: {
        properties: {
            channel: {
                type: Schema.slack.types.channel_id,
                description: "Channel where the event was triggered"
            },
            user: {
                type: Schema.slack.types.user_id,
                description: "User where the event was triggered"
            }
        },
        required: ["channel", "user"]
    }
});

export default SlackFunction(gitlabSample, async ({
    inputs,
    client
},) => {
    console.log(inputs)
    // console.log(client);
    return {outputs: {}};
})