import s from './ListItem.module.css';
import { useDispatch } from "react-redux";
import { useState } from "react";
import { deleteTask, toggleCompleted, updateTask } from "../../redux/tasks/operations.js";

const ListItem = ({ task }) => {
  const dispatch = useDispatch();

  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);
  const [editedDescription, setEditedDescription] = useState(task.description);

  const handleDelete = () => dispatch(deleteTask(task._id));
  const handleToggle = () => dispatch(toggleCompleted(task));

  const handleUpdate = () => setIsEditing(true);

  const handleSave = () => {
    dispatch(updateTask({
      _id: task._id,
      title: editedTitle,
      description: editedDescription
    }));
    setIsEditing(false);
  };

  return (
    <div className={s.wrapper}>
      <input
        type="checkbox"
        className={s.checkbox}
        checked={!!task.completed}
        onChange={handleToggle}
      />
      <div className={s.containerText}>
        {isEditing ? (
          <>
            <input
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
              className={s.input}
              placeholder="Edit title"
            />
            <input
              value={editedDescription}
              onChange={(e) => setEditedDescription(e.target.value)}
              className={s.input}
              placeholder="Edit description"
            />
          </>
        ) : (
          <>
            <p className={s.text}>Title: {task.title}</p>
            <p>Description: {task.description}</p>
          </>
        )}
      </div>

      {isEditing ? (
        <button className={s.button} onClick={handleSave}>
          Save
        </button>
      ) : (
        <button className={s.button} onClick={handleUpdate}>
          Update
        </button>
      )}
      <button className={s.button} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default ListItem;
