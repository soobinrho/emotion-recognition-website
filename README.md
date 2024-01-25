## Development Logs

- Trained the model on Jupyter Lab.

```python
model.save("final_model.keras")
```

- Converted the model into [TF.js layers format](https://www.tensorflow.org/js/tutorials/conversion/import_keras).
This required installation of a pyton `tensorflowjs` package.
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

- Used [`react-webcam`](https://github.com/mozmorris/react-webcam?tab=readme-ov-file) package for the webcam functionality.
