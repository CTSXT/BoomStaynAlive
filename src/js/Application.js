import EventEmitter from "eventemitter3";
import Beat from "./Beat";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }
let count = 0;
  constructor() {
    super();
    this._beat=new Beat();
    this._beat.on(Beat.events.BIT,this._create());
    this._create=()=>{
    const message = document.createElement("div");
    message.classList.add("message");
    message.innerText = lyrics[count];
      count++;
    document.querySelector(".main").appendChild(message);
    };
    const lyrics = ["Ah", "ha", "ha", "ha", "stayin' alive", "stayin' alive"];

    this.emit(Application.events.READY);
  }
}
