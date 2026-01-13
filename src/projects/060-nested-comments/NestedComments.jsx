import { useState } from 'react';
import './NestedComments.css';

const Comment = ({ comment, addReply }) => {
  const [showReplyBox, setShowReplyBox] = useState(false);
  const [replyText, setReplyText] = useState('');
  const [isExpanded, setIsExpanded] = useState(true);

  const handleReply = () => {
    if (replyText.trim()) {
      addReply(comment.id, replyText);
      setReplyText('');
      setShowReplyBox(false);
      setIsExpanded(true); // Ensure expanded to see new reply
    }
  };

  return (
    <div className="comment-wrapper">
      <div className="comment-card">
        <div className="comment-header">
          <span className="author">{comment.author}</span>
          <span className="time">2 hours ago</span>
        </div>
        <p>{comment.text}</p>

        <div className="comment-actions">
          <button onClick={() => setShowReplyBox(!showReplyBox)}>Reply</button>
          {comment.children.length > 0 && (
            <button onClick={() => setIsExpanded(!isExpanded)}>
              {isExpanded ? 'Collapse' : `Expand (${comment.children.length})`}
            </button>
          )}
        </div>

        {showReplyBox && (
          <div className="reply-box">
            <textarea
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              placeholder="Write a reply..."
            />
            <div className="reply-btns">
              <button className="cancel" onClick={() => setShowReplyBox(false)}>
                Cancel
              </button>
              <button className="submit" onClick={handleReply}>
                Submit
              </button>
            </div>
          </div>
        )}
      </div>

      {isExpanded && comment.children.length > 0 && (
        <div className="nested-comments">
          {comment.children.map((child) => (
            <Comment key={child.id} comment={child} addReply={addReply} />
          ))}
        </div>
      )}
    </div>
  );
};

const NestedComments = () => {
  const [comments, setComments] = useState([
    {
      id: 1,
      author: 'User 1',
      text: 'This is the first comment!',
      children: [
        {
          id: 2,
          author: 'User 2',
          text: 'Replying to the first comment.',
          children: [],
        },
      ],
    },
    {
      id: 3,
      author: 'User 3',
      text: 'Another independent comment.',
      children: [],
    },
  ]);

  const addReply = (parentId, text) => {
    const newReply = {
      id: Date.now(),
      author: 'You',
      text,
      children: [],
    };

    const attachReply = (items) => {
      return items.map((item) => {
        if (item.id === parentId) {
          return { ...item, children: [...item.children, newReply] };
        } else if (item.children.length > 0) {
          return { ...item, children: attachReply(item.children) };
        }
        return item;
      });
    };

    setComments(attachReply(comments));
  };

  return (
    <div className="comments-container">
      <h2>Nested Comments</h2>
      <div className="comments-list">
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment} addReply={addReply} />
        ))}
      </div>
    </div>
  );
};

export default NestedComments;
