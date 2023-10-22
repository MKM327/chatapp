import generateTime from "@/lib/generateTime";
import { IChat } from "@/lib/getChats";
interface MessageProps {
  chat: IChat;
}
export default function Message({ chat }: MessageProps) {
  return (
    <div className="flex justify-between hover:bg-gray-700 p-3">
      <div className="flex gap-2">
        <div className="bg-purple-500 rounded-full aspect-square w-10 flex items-center justify-center">
          <i className="fa-solid fa-id-card text-white"></i>
        </div>
        <div>
          <h4 className="text-white font-medium text-sm">{chat.firstName}</h4>
          <span className="text-text-color text-sm">{chat.lastMessage}</span>
        </div>
      </div>
      <div className="text-text-color text-xs">
        {generateTime(chat.MessageDate)}
      </div>
    </div>
  );
}
