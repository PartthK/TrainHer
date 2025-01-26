import sys
import cv2
import mediapipe as mp
import pyttsx3
import numpy as np
from sklearn.metrics import mean_squared_error
import os

# Initialize MediaPipe Pose
mp_pose = mp.solutions.pose
pose = mp_pose.Pose()
mp_drawing = mp.solutions.drawing_utils

# Text-to-Speech Engine
engine = pyttsx3.init()

# Function to extract pose landmarks from an image
def extract_pose_from_image(image_path):
    image = cv2.imread(image_path)
    if image is None:
        print(f"Error: Could not read the image {image_path}.")
        return None

    # Convert to RGB
    rgb_image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)

    # Process the image with MediaPipe Pose
    results = pose.process(rgb_image)

    # Extract pose landmarks
    if results.pose_landmarks:
        keypoints = [
            (landmark.x, landmark.y) for landmark in results.pose_landmarks.landmark
        ]
        return np.array(keypoints)
    else:
        print(f"No pose detected in the image {image_path}.")
        return None

# Function to calculate accuracy percentage from MSE
def calculate_accuracy(mse, max_mse):
    # Ensure accuracy is within the range [0, 100]
    accuracy = max(0, 100 * (1 - (mse / max_mse)))
    return accuracy

# Function to analyze moves using the webcam
def analyze_moves(reference_poses, selected_move):
    cap = cv2.VideoCapture(0)
    print("Camera activated. Waiting for your moves...")

    print(f"Perform the move: {selected_move.upper()}")
    engine.say(f"Perform the move: {selected_move}")
    engine.runAndWait()

    # Define a maximum MSE value for normalization
    max_mse = 0.1  # Adjust this based on your application

    while True:
        ret, frame = cap.read()
        if not ret:
            print("Failed to capture frame. Exiting...")
            break

        # Flip frame for a mirror-like experience
        frame = cv2.flip(frame, 1)

        # Convert frame to RGB
        rgb_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)

        # Process with MediaPipe Pose
        results = pose.process(rgb_frame)

        # Draw pose landmarks
        if results.pose_landmarks:
            mp_drawing.draw_landmarks(frame, results.pose_landmarks, mp_pose.POSE_CONNECTIONS)

            # Extract keypoints
            keypoints = [
                (landmark.x, landmark.y) for landmark in results.pose_landmarks.landmark
            ]

            # Convert to numpy array
            user_pose = np.array(keypoints)

            # Calculate Mean Squared Error
            reference_pose = reference_poses[selected_move]
            mse = mean_squared_error(reference_pose.flatten(), user_pose.flatten()[:len(reference_pose.flatten())])

            # Calculate accuracy percentage
            accuracy = calculate_accuracy(mse, max_mse)

            if accuracy >= 90:  # Example threshold for "good" accuracy
                feedback = f"Great job! Your {selected_move} move accuracy is {accuracy:.2f}%."
                engine.say(feedback)
                engine.runAndWait()
                print(feedback)

                # Thank you message and exit
                thank_you_message = "Thank you for practicing. Great job! Exiting the program."
                print(thank_you_message)
                engine.say(thank_you_message)
                engine.runAndWait()

                # Reset the move.txt file
                with open("move.txt", "w") as file:
                    file.write("")
                break
            else:
                feedback = f"Keep practicing! Your {selected_move} move accuracy is {accuracy:.2f}%."
                print(feedback)

            # Display feedback on screen
            cv2.putText(frame, feedback, (10, 50), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2)

        # Show the frame
        cv2.imshow("Self-Defense Trainer", frame)

        # Break on 'q' key press
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

    cap.release()
    cv2.destroyAllWindows()

if __name__ == "__main__":
    # Read the move from the command-line arguments
    if len(sys.argv) < 2:
        print("No move provided. Exiting.")
        sys.exit(1)

    selected_move = sys.argv[1].lower()
    print(f"Selected move: {selected_move}")

    # Load reference poses
    reference_images = {
        "punch": "punch_pose.jpg",
        "kick": "kick_pose.jpg",
        "upper block": "upper_block_pose.jpg",
        "middle block": "middle_block_pose.webp",
        "downward block": "downward_block_pose.webp",
    }

    reference_poses = {}
    for move, image_path in reference_images.items():
        reference_pose = extract_pose_from_image(image_path)
        if reference_pose is not None:
            reference_poses[move] = reference_pose
        else:
            print(f"Failed to load pose for {move}. Exiting.")
            sys.exit(1)

    # Analyze the selected move
    if selected_move in reference_poses:
        analyze_moves(reference_poses, selected_move)
    else:
        print(f"Invalid move: {selected_move}. Exiting.")
