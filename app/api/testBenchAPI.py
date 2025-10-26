from flask import Flask
from flask import request
# import pyCandapter
import can
import signal
import cantools
from pprint import pprint
import json

app = Flask(__name__)


@app.route("/dbc")
def parse():
    db = cantools.database.load_file('20240625_Gen5_CAN_DB.dbc')
    
    

    # msg = ""
    # for i in db.messages:
    #     msg += str(i) + '<br>'

    # msg += '<br>'

    # for i in db.nodes:
    #     msg += str(i) + '<br>'

    data = db.encode_message("M165_Motor_Position_Info", {"INV_Delta_Resolver_Filtered": 0, "INV_Electrical_Output_Frequency": 0, "INV_Motor_Speed": 14390, "INV_Motor_Angle_Electrical": 0})
    return f"{can.Message(arbitration_id=db.get_message_by_name("M165_Motor_Position_Info").frame_id, is_extended_id=db.get_message_by_name("M165_Motor_Position_Info").is_extended_frame, data = data)}"

@app.route("/api/send")
def send():
    # bus = can.interface.Bus(interface='pcan', channel='PCAN_USBBUS1', bitrate=500000)
    message = can.Message(arbitration_id=0xA5, data=[0, 0, 54, 56, 0, 0, 0, 0], is_extended_id=False)
    # while(True):
    #     bus.send(message)# -14390
    return f"{message}"

