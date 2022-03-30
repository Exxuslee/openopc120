import socket
import OpenOPC
import time
import asyncio

#tags = 'PN_SIMULATOR.PD_SIMULATOR.Sin'


async def main():
    global opc
    output = '0'
    server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    server.bind(('127.0.0.1', 3210))
    server.listen(100)

    # hdrs: bytes = 'HTTP/1.1 200 OK\r\nContent-Type: text/html; charset=utf-8\r\n\r\n'.encode('utf-8')
    while True:
        async def alfa():
            post = []
            dataopc = opc.read(tags.split())
            for i in range(len(dataopc)):
                (name, val, qual, time) = dataopc[i]
                post.append(round(val, 2))
            return post

        # print('Server listen..')
        client_socet, addres = server.accept()
        tags = client_socet.recv(2048).decode('utf-8')
        print(tags)
        try:
            opc = OpenOPC.client()
            opc.connect('InSAT.ModbusOPCServer.DA')
            output = (await alfa())
        except Exception as ex:
            print(ex)
        finally:
            # client_socet.send(hdrs + str(output).encode('utf-8'))
            client_socet.send(str(output).encode('utf-8'))
            client_socet.close()
            opc.close()


asyncio.run(main())
