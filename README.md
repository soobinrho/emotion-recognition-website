## Development Logs

0. Download Tensorflow.js from console.

```bash
pip install tensorflowjs
```

1. Train the model on Jupyter Lab.

```python
import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense, Conv2D, Flatten, Dropout, MaxPooling2D
from tensorflow.keras.preprocessing.image import ImageDataGenerator
from pathlib import Path
import numpy as np
from tensorflow.keras.optimizers import Adam
from tensorflow.keras.applications.resnet50 import ResNet50

# Get FER-2013 from Kaggle.
# Source:
#   https://www.kaggle.com/datasets/msambare/fer2013
train_data_dir = './archive/train/'
test_data_dir = './archive/test/'

img_height, img_width = 48, 48
batch_size = 64

train_datagen = ImageDataGenerator(rescale=1./255,
                                   rotation_range=20,
                                   width_shift_range=0.2,
                                   height_shift_range=0.2,
                                   horizontal_flip=True)
test_datagen = ImageDataGenerator(rescale=1./255)

train_generator = train_datagen.flow_from_directory(
    train_data_dir,
    target_size=(img_height, img_width),
    batch_size=batch_size,
    color_mode="grayscale",
    class_mode="sparse")

test_generator = test_datagen.flow_from_directory(
    test_data_dir,
    target_size=(img_height, img_width),
    batch_size=batch_size,
    color_mode="grayscale",
    class_mode="sparse")

np.random.seed(42)
tf.random.set_seed(42)

model = Sequential([
    Conv2D(64, kernel_size=(3, 3), activation='relu', input_shape=(48, 48, 1)),
    MaxPooling2D(pool_size=(2, 2)),
    Dropout(0.25),

    Conv2D(128, kernel_size=(3, 3), activation='relu'),
    MaxPooling2D(pool_size=(2, 2)),
    Dropout(0.25),
    
    Conv2D(256, kernel_size=(3, 3), activation='relu'),
    MaxPooling2D(pool_size=(2, 2)),
    Dropout(0.25),
    
    Conv2D(512, kernel_size=(3, 3), activation='relu'),
    MaxPooling2D(pool_size=(2, 2)),
    Dropout(0.25),

    Flatten(),
    Dense(512, activation='relu'),
    Dropout(0.5),
    Dense(7, activation='softmax')
])

model.compile(optimizer=Adam(lr=0.0001), loss='sparse_categorical_crossentropy', metrics=['accuracy'])

run_index = 1
run_logdir = Path() / "my_final_logs" / "run_{:03d}".format(run_index)

early_stopping_cb = tf.keras.callbacks.EarlyStopping(patience=8)
checkpoint_cb = tf.keras.callbacks.ModelCheckpoint("my_final_model", save_best_only=True)
tensorboard_cb = tf.keras.callbacks.TensorBoard(run_logdir)
history = model.fit(
    train_generator,
    steps_per_epoch=train_generator.samples // batch_size,
    epochs=125,
    validation_data=test_generator,
    validation_steps=test_generator.samples // batch_size,
    callbacks=[checkpoint_cb, early_stopping_cb, tensorboard_cb])

# Save the model. This model will be later used by the website.
# Source:
#   https://www.tensorflow.org/js/tutorials/conversion/import_keras#alternative_use_the_python_api_to_export_directly_to_tfjs_layers_format
import tensorflowjs as tfjs

tfjs.converters.save_keras_model(model, "final_model.json")

```

