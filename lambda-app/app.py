import requests

def handler(event, context):
    return {
        "body": str(requests.get("https://checkip.amazonaws.com").content)
    }
