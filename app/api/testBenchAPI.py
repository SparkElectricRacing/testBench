from flask import Flask
from flask import request
# import pyCandapter
import can
import signal

app = Flask(__name__)

@app.route("/api/send")
def send():
    bus = can.interface.Bus(interface='pcan', channel='PCAN_USBBUS1', bitrate=500000)
    message = can.Message(arbitration_id=0xA5, data=[0, 0, 54, 56, 0, 0, 0, 0], is_extended_id=False)
    while(True):
        bus.send(message) -14390
    return f"{message}"

