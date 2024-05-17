const path = require('path');

(async () => {
  const { env, AutoTokenizer, LlamaTokenizer } = await import('@xenova/transformers')
  const ortPromise = import('onnxruntime-node')
  env.allowLocalModels = true

  let modelPath = path.join('models', 'flcc.model')
  let modelBase = path.join('..', '..', '..', '..', 'models', '')

  let tokenizer = await LlamaTokenizer.from_pretrained(modelBase, {
    quantized: true,
    local_files_only: true,
  })

  const ort = await ortPromise
  ort.default.InferenceSession.create(modelPath, { executionProviders: ['cpu'] }).then(async (ortSession) => {

  })

})()

