import OpenOPC
import time
import asyncio

#opc = OpenOPC.client()
#opc.connect('InSAT.ModbusOPCServer.DA')
#tags = ['PN_SIMULATOR.PD_SIMULATOR.Sin']
#opc.read(tags, group='mygroup', update=1)

tags = 'PN_SIMULATOR.PD_SIMULATOR.Sin'

async def main():
    async def alfa():
        dataOPC = opc.read(tags)
        return dataOPC

    while True:
        time.sleep(1)
        try:
            opc = OpenOPC.client()
            opc.connect('InSAT.ModbusOPCServer.DA')
            print(await alfa())
            opc.close()
        except Exception as ex:
            print(ex)



asyncio.run(main())
