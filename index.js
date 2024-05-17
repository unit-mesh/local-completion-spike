const path = require('path');

(async () => {
  const { env, AutoTokenizer } = await import('@xenova/transformers')
  env.allowLocalModels = true

  let modelPath = path.join('..', '..', '..', 'models', 'flcc.model')
  let modelBase = path.join('..', '..', '..', 'models', '')

  let tokenizer = await AutoTokenizer.from_pretrained(modelBase, {
    quantized: true,
    local_files_only: true,
  })
})()

