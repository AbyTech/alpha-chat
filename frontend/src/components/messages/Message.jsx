const Message = () => {
    return (
        <div className="chat chat-end">
            <div className="chat-image avatar">
            <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
            </div>
            <div className={`chat-bubble text-white bg-blue-300`}>What is Up?</div>
            <div className={`chat-footer opacity-50 text-xs flex gap-1 items-center`}>12:00</div>
        </div>
    );
};
export default Message;