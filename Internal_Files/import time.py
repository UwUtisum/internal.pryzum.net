import time
import requests

url = "https://camo.githubusercontent.com/baa6df024ac208948460469bad6a0b30a9ae2084a30991e90b1857ec030abc61/68747470733a2f2f6b6f6d617265762e636f6d2f67687076632f3f757365726e616d653d557755746973756d26636f6c6f723d67726579"

# Ping the URL every 500 milliseconds
while True:
    try:
        response = requests.get(url)
        print(f"Pinged {url} - Status code: {response.status_code}")
    except requests.exceptions.RequestException as e:
        print(f"An error occurred: {e}")
    
    time.sleep(0.01)  # Sleep for 500 milliseconds
