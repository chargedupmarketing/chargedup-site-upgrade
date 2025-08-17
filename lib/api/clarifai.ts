import { ClarifaiStub, grpc } from 'clarifai-nodejs-grpc'

export interface ClarifaiConfig {
  apiKey: string
  modelId?: string
}

export class ClarifaiClient {
  private stub: any
  private metadata: any

  constructor(config: ClarifaiConfig) {
    this.stub = ClarifaiStub.grpc()
    this.metadata = new grpc.Metadata()
    this.metadata.set("authorization", "Key " + config.apiKey)
  }

  async generateText(prompt: string, modelId: string = "text-generation") {
    const requestData = {
      model_id: modelId,
      inputs: [
        {
          data: {
            text: {
              raw: prompt
            }
          }
        }
      ]
    }

    return new Promise((resolve, reject) => {
      this.stub.PostModelOutputs(
        requestData,
        this.metadata,
        (err: any, response: any) => {
          if (err) {
            reject(err)
          } else {
            resolve(response)
          }
        }
      )
    })
  }

  async generateImage(prompt: string, modelId: string = "image-generation") {
    const requestData = {
      model_id: modelId,
      inputs: [
        {
          data: {
            text: {
              raw: prompt
            }
          }
        }
      ]
    }

    return new Promise((resolve, reject) => {
      this.stub.PostModelOutputs(
        requestData,
        this.metadata,
        (err: any, response: any) => {
          if (err) {
            reject(err)
          } else {
            resolve(response)
          }
        }
      )
    })
  }
}
