import socket


dataOPC = '0'

server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server.bind(('127.0.0.1', 2000))
server.listen(100)


while True:
    print('Server listen..')
    client_socet, addres = server.accept()
#    data = client_socet.recv(1024).decode('utf-8')
    HDRS = 'HTTP/1.1 200 OK\r\nContent-Type: text/html; charset=utf-8\r\n\r\n'
    client_socet.send(HDRS.encode('utf-8') + str(dataOPC).encode('utf-8'))
