import tensorflow as tf
model = tf.keras.applications.MobileNetV2(weights='imagenet')
print("Model loaded successfully")