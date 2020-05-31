import React, { useState } from "react";
import createNoteMutation from "./mutations/createNote";
import deleteNoteMutation from "./mutations/deleteNote";
import updateNoteMutation from "./mutations/updateNote";
import { Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import CheckIcon from "@material-ui/icons/Check";

const MainPage = ({ notes }) => {
  const [newNote, setNewNote] = useState("");
  const [noteContentBeingUpdated, setNoteContentBeingUpdated] = useState("");
  const [noteIdBeingUpdated, setNoteIdBeingUpdated] = useState("");

  const updateMessage = () => {
      return <div><h5>Just updated</h5></div>;
  };
  return (
    <div>
      <div
        style={{
          color: "black",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          background:
            "linear-gradient(0deg, rgba(247,218,16,1) 0%, #60a3bc 100%)",
        }}
      >
        {/* <header style={{color: 'rgba(247,218,16,1)', fontSize: '5em', display: 'flex', justifyContent: 'center'}}>notes</header> */}
        <footer
          style={{
            display: "flex",
            justifyContent: "flex-start",
            padding: "50px",
          }}
        >
          <input
            style={{
              outline: "none",
              borderRadius: "10px",
              marginRight: "10px",
              border: "2px solid #60a3bc",
            }}
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
          ></input>
          <Button
            style={{
              color: "#fff",
              textTransform: "uppercase",
              textDecoration: "none",
              background: "#60a3bc",
              padding: "20px",
              borderRadius: "50px",
              display: "inline-block",
              border: "none",
              transition: "all 0.4s ease 0s",
              fontFamily: "fantasy",
              fontSize: "1rem",
            }}
            size="medium"
            variant="outlined"
            onClick={() => {
              if (newNote) {
                createNoteMutation(newNote);
                setNewNote("");
              }
            }}
          >
            create note
          </Button>
        </footer>
      </div>
      <div
        style={{
          color: "black",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          background:
            "linear-gradient(0deg, #60a3bc 0%, rgba(247,218,16,1) 100%)",
          paddingTop: "20px",
          paddingBottom: "1000px",
        }}
      >
        <ul>
          {notes.map((v) => {
            const isBeingUpdated = noteIdBeingUpdated === v._id;

            return (
              <div style={{ margin: "10px" }} key={v._id}>
                {isBeingUpdated ? (
                  <li
                    style={{
                      outline: "5px solid #60a3bc",
                      padding: "5px",
                      width: "50%",
                      overflowWrap: "break-word",
                      fontFamily: "fantasy",
                    }}
                  >
                    <input
                      style={{ width: "100%", height: "100%" }}
                      autoFocus
                      value={noteContentBeingUpdated}
                      onChange={
                        ((e) => setNoteContentBeingUpdated(e.target.value), updateMessage())
                      }
                    />
                    <div
                      style={{ display: "flex", justifyContent: "flex-end" }}
                    >
                      <CheckIcon
                        color="white"
                        size="medium"
                        variant="outlined"
                        onClick={() => {
                          if (isBeingUpdated) {
                            updateNoteMutation(v._id, noteContentBeingUpdated);
                            setNoteIdBeingUpdated("");
                            setNoteContentBeingUpdated("");
                          } else {
                            setNoteIdBeingUpdated(v._id);
                            setNoteContentBeingUpdated(v.content);
                          }
                        }}
                      >
                        update
                      </CheckIcon>
                    </div>
                  </li>
                ) : (
                  <li
                    style={{
                      outline: "5px solid #60a3bc",
                      padding: "5px",
                      width: "50%",
                      overflowWrap: "break-word",
                      fontFamily: "fantasy",
                    }}
                  >
                    {v.content}
                    <div
                      style={{ display: "flex", justifyContent: "flex-end" }}
                    >
                      <EditIcon
                        color="white"
                        size="medium"
                        variant="outlined"
                        onClick={() => {
                          if (isBeingUpdated) {
                            updateNoteMutation(v._id, noteContentBeingUpdated);
                            setNoteIdBeingUpdated("");
                            setNoteContentBeingUpdated("");
                          } else {
                            setNoteIdBeingUpdated(v._id);
                            setNoteContentBeingUpdated(v.content);
                          }
                        }}
                      >
                        update
                      </EditIcon>
                      <DeleteIcon
                        color="black"
                        variant="outlined"
                        size="small"
                        onClick={() => deleteNoteMutation(v._id)}
                      >
                        delete
                      </DeleteIcon>
                    </div>
                  </li>
                )}
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default MainPage;
