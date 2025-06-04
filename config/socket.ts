import { Server as HTTPServer } from "http";
import { Socket, Server as SocketIOServer } from "socket.io";

let io: SocketIOServer | null = null;

export default (server: HTTPServer): SocketIOServer => {
  if (io) {
    return io;
  }

  io = io = new SocketIOServer(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });
  

  io.on("connection", (socket: Socket) => {
    console.log("socket connected");

    socket.on("disconnect", () => {
      console.log("socket disconnected");
    });
  });

  return io;
};

export { io };
