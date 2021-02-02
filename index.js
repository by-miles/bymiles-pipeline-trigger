const AWS = require("aws-sdk");
const core = require("@actions/core");

try {
    const awsAccessKey = core.getInput("aws-access-key");
    const awssecretKey = core.getInput("aws-secret-key");
    const pipelineName = core.getInput("pipeline-name");

    AWS.config = new AWS.Config();
    AWS.config.region = 'eu-west-2';
    AWS.config.accessKeyId = awsAccessKey;
    AWS.config.secretAccessKey = awssecretKey;

    const codepipeline = new AWS.CodePipeline();

    await codepipeline.startPipelineExecution({
        name: pipelineName,
    }).promise();

} catch (error) {
    core.setFailed(error.message);
}
