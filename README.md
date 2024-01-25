## Development Logs

1. Train the model on Jupyter Lab.

```python
model.save("final_model.keras")
```

2. Convert the model into TF.js layers format.
This requires installation of a pyton `tensorflowjs` package.
Do not install this in the same environment as the model's because
conflicts can occur, which tends to break the entire training process.

```bash
conda deactivate
conda create --name tfjs python=3.10
conda activate tfjs
pip install tensorflow[and-cuda] Cython tensorflowjs

# Source:
#   https://www.tensorflow.org/js/tutorials/conversion/import_keras#step_1_convert_an_existing_keras_model_to_tfjs_layers_format
tensorflowjs_converter ./my_final_model ./ml_model
```
