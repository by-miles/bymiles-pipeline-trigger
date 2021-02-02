# By Miles AWS CodePipeline Trigger

This actions allows to trigger an AWS CodePipeline

## Inputs

- `aws-access-key`
- `aws-secret-key`
- `pipeline-name`

**Required** All inputs are required`.

## Example usage
```
jobs:
  deploy:
    steps:
      - name: Trigger AWS CodePipeline
        uses: bymiles/bymiles-pipeline-trigger@v1
        with:
          aws-access-key: ${{ secrets.AWS_PIPELINE_ACCESS_KEY }}
          aws-secret-key: ${{ secrets.AWS_PIPELINE_SECRET_KEY }}
          pipeline-name: "your-pipeline-name"
```
