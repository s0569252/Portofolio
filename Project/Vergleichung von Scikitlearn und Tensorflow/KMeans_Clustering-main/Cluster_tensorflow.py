import tensorflow as tf
import numpy as np
import matplotlib.pyplot as plt
import pandas as pd

# Function to perform KMeans clustering using TensorFlow
def kmeans_tf(X, n_clusters=4, n_iterations=100, tol=0.0001):
    n_samples, n_features = X.shape
    X = tf.Variable(X, dtype=tf.float32)

    # Initialize centroids randomly
    indices = tf.random.shuffle(tf.range(n_samples))[:n_clusters]
    centroids = tf.Variable(tf.gather(X, indices))

    for i in range(n_iterations):
        # Calculate distances and assign clusters
        distances = tf.norm(tf.expand_dims(X, 1) - centroids, axis=2)
        labels = tf.argmin(distances, axis=1)

        # Store previous centroids to check for convergence
        prev_centroids = tf.identity(centroids)

        # Update centroids
        for j in range(n_clusters):
            cluster_points = tf.boolean_mask(X, tf.equal(labels, j))
            if tf.shape(cluster_points)[0] > 0:
                centroids[j].assign(tf.reduce_mean(cluster_points, axis=0))

        # Check for convergence
        centroid_shift = tf.norm(centroids - prev_centroids, ord='euclidean')
        if centroid_shift.numpy().max() < tol:
            # print(f"K-Means converged at iteration {i+1}")
            break  # Stop if centroids do not change significantly

    return labels.numpy(), centroids.numpy()

# Reading the data
df = pd.read_csv('Mall_Customers.csv')

# 1. Segmentation using Age and Spending Score
X1 = df[['Age', 'Spending Score (1-100)']].values
labels1, centroids1 = kmeans_tf(X1, n_clusters=4)

plt.figure(1, figsize=(15, 7))
plt.scatter(X1[:, 0], X1[:, 1], c=labels1, s=200, cmap='Pastel2')
plt.scatter(centroids1[:, 0], centroids1[:, 1], s=300, c='red', alpha=0.5)
plt.xlabel('Age')
plt.ylabel('Spending Score (1-100)')
plt.title('Clustering by Age and Spending Score')
plt.show()

# 2. Segmentation using Annual Income and Spending Score
X2 = df[['Annual Income (k$)', 'Spending Score (1-100)']].values
labels2, centroids2 = kmeans_tf(X2, n_clusters=5)

plt.figure(2, figsize=(15, 7))
plt.scatter(X2[:, 0], X2[:, 1], c=labels2, s=200, cmap='Pastel2')
plt.scatter(centroids2[:, 0], centroids2[:, 1], s=300, c='red', alpha=0.5)
plt.xlabel('Annual Income (k$)')
plt.ylabel('Spending Score (1-100)')
plt.title('Clustering by Annual Income and Spending Score')
plt.show()

# 3. Segmentation using Age, Annual Income and Spending Score (3D)
X3 = df[['Age', 'Annual Income (k$)', 'Spending Score (1-100)']].values
labels3, centroids3 = kmeans_tf(X3, n_clusters=6)

fig = plt.figure(3, figsize=(10, 8))
ax = fig.add_subplot(111, projection='3d')
ax.scatter(X3[:, 0], X3[:, 1], X3[:, 2], c=labels3, s=200, cmap='Pastel2')
ax.scatter(centroids3[:, 0], centroids3[:, 1], centroids3[:, 2], s=300, c='red', alpha=0.5)
ax.set_xlabel('Age')
ax.set_ylabel('Annual Income (k$)')
ax.set_zlabel('Spending Score (1-100)')
ax.set_title('3D Clustering by Age, Annual Income and Spending Score')
plt.show()
