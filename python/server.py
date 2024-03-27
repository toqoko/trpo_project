import socket

# Создание сокета
server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

# Привязка сокета к адресу и порту
server_address = ('localhost', 12345)
server_socket.bind(server_address)

# Ожидание подключения клиента
server_socket.listen(1)
print("Ждем подключения клиента...")

# Принятие подключения
connection, client_address = server_socket.accept()
print("Подключен клиент:", client_address)

try:
    while True:
        # Получение данных от клиента
        data = connection.recv(1024)
        if data:
            print("Получено от клиента:", data.decode())
            # Отправка обратно клиенту
            connection.sendall(data)
        else:
            break

finally:
    # Закрытие соединения
    connection.close()
