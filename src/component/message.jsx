/* eslint-disable react/prop-types */

import { useState } from 'react';
import { Link } from 'react-router-dom';
import {format} from 'timeago.js'


const Message = ({ message, own, img, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedMessage, setEditedMessage] = useState(message.content);

  const handleEdit = () => {
    if (editedMessage.trim() !== '') {
      onEdit(message.id, editedMessage);
      setIsEditing(false);
    }
  };
  

  
  return (
    <section className={`flex ${own ? 'justify-end' : 'justify-start'}`}>
      <div className={`flex ${own ? 'flex-row-reverse' : 'flex-row'} items-end`}>
        <div>
          <img src={img} alt="user_pics" className="w-[45px] h-[45px] rounded-[50%]" />
        </div>
        <div className={`ml-2 ${own ? 'mr-2' : ''}`}>
          <div className="flex flex-col">
            {isEditing ? (
              <textarea
                value={editedMessage}
                onChange={(e) => setEditedMessage(e.target.value)}
                className="rounded-[10px] bg-gray-200 text-black text-[20px] w-full font-[400] max-w-[400px] p-[10px]"
              />
            ) : (
              <p className={`rounded-[10px] ${own ? 'bg-blue-500' : 'bg-violet-500'} text-white text-[20px] font-[400] max-w-[300px] p-[10px]`}>
                {message.content}
              </p>
            )}
            <div className={`rounded-[10px] mt-2 ${own ? 'bg-blue-500' : 'bg-violet-500'} text-white text-[20px] font-[400] max-w-[300px]`}>
              {message.attachments && Array.isArray(message.attachments) && message.attachments.map((attachment, index) => (
                <div key={index}>
                  <Link className="p-[10px]" to={attachment.url}>{attachment.title}</Link>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-[13px]">{format(message.timestamp)}</p>
          </div>
          {own && (
            <div className="flex space-x-2">
              {isEditing ? (
                <>
                  <button onClick={handleEdit} className="text-blue-500">Save</button>
                  <button onClick={() => setIsEditing(false)} className="text-red-500">Cancel</button>
                </>
              ) : (
                <>
                  <button onClick={() => setIsEditing(true)} className="text-yellow-500"><i className="ri-ball-pen-fill"></i></button>
                  <button onClick={() => onDelete(message.id)} className="text-red-500"><i className="ri-delete-bin-6-fill"></i></button>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Message;