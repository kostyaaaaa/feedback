export interface IChannel {
  sendToQueue: (msg: string) => void;
}
