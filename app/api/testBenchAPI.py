from flask import Flask
from flask import request
# import pyCandapter
import can
import signal
import cantools
from pprint import pprint
import json

app = Flask(__name__)

@app.route('/api/dbc')
def fullList():
    db = cantools.database.load_file('20240625_Gen5_CAN_DB.dbc')
    dict = {}
    for i in db.messages:
        sigs = {}
        for j in i.signals:
            data = {}

            convmin = j.minimum
            convmax = j.maximum
            convscale = j.scale

            if convmin is None or convscale is None:
                convmin = None
            else:
                convmin = (convmin * convscale) + j.offset

            if convmax is None or convscale is None:
                convmax = None
            else:
                convmax = (convmax * convscale) + j.offset
            


            

            data.update({"units": j.unit, 
                        "raw min": j.minimum, 
                        "raw max": j.maximum,
                        "conv min": convmin, 
                        "conv max" : convmax})
            sigs.update({j.name: data})
        dict.update({i.name: sigs})

    

    # for i in db.nodes:
    #     msg += str(i) + '<br>'

    return dict



@app.route("/api/dbc/example")
def parse():
    db = cantools.database.load_file('20240625_Gen5_CAN_DB.dbc')
    
    
    

    

    data = db.encode_message("M165_Motor_Position_Info", {"INV_Electrical_Output_Frequency": 0, "INV_Motor_Speed": 14390, "INV_Motor_Angle_Electrical": 0, "INV_Delta_Resolver_Filtered": 0})
    return f"{can.Message(arbitration_id=db.get_message_by_name("M165_Motor_Position_Info").frame_id, is_extended_id=db.get_message_by_name("M165_Motor_Position_Info").is_extended_frame, data = data)}"

@app.route("/api/dbc/send", methods=['POST'])
def send():
    db = cantools.database.load_file('20240625_Gen5_CAN_DB.dbc')
    # bus = can.interface.Bus(interface='pcan', channel='PCAN_USBBUS1', bitrate=500000)
    # message = can.Message(arbitration_id=0xA5, data=[0, 0, 54, 56, 0, 0, 0, 0], is_extended_id=False)

    msgs = request.json
    # print(msgs)
    # while(True):
    #     bus.send(message)# -14390
    print(msgs)
    return msgs

