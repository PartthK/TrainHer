import time
import os
import subprocess

def monitor_file(file_path="move.txt"):
    print(f"Monitoring {file_path} for changes...")
    last_modified_time = None

    while True:
        # Check if the file exists
        if os.path.exists(file_path):
            # Get the current modified time
            current_modified_time = os.path.getmtime(file_path)

            # Detect file changes
            if last_modified_time is None or current_modified_time != last_modified_time:
                last_modified_time = current_modified_time

                # Read the file content
                with open(file_path, "r") as file:
                    move = file.read().strip().lower()

                # If there's valid content, execute main.py
                if move:
                    print(f"Detected move: {move}")
                    try:
                        # Execute main.py and pass the detected move as an argument
                        subprocess.run(
                            ["python", "main.py", move], check=True
                        )
                    except subprocess.CalledProcessError as e:
                        print(f"Error while executing main.py: {e}")
        else:
            print(f"File {file_path} not found. Retrying...")

        # Sleep before the next check
        time.sleep(1)

if __name__ == "__main__":
    monitor_file("move.txt")
