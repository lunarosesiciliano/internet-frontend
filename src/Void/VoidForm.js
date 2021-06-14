import React, { useState } from "react";
const voidsURL = "http://localhost:3000/voids";

export default function VoidForm(props) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [mood, setMood] = useState("");

  const handleSubmit = (e) =>{
    e.preventDefault();
    fetch(voidsURL,{
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
    .then((response)=> response.json())
    .then((v)=>props.addVoids(v))

    setName("")
    setMessage("")
    setMood("")
  }
  return (
    <div className="void-form-div">
      <form method="POST" onSubmit={handleSubmit} className="void-form">
        <p>name:</p>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          className="name-input"
          placeholder="............."
          required
        ></input>
        <p>?</p>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="textarea"
          name="message"
          rows="6"
          cols="50"
          placeholder=" ☺︎ ☹︎ ☺︎ ☹︎ ☺︎ ☹︎ ☺︎ ☹︎ ☺︎ ☺︎ ☹︎ ☺︎ ☹︎ ☺︎ ☹︎ ☺︎ ☹︎ ☺︎ ☹︎ ☺︎ ☹︎ ☺︎ ☹︎ ☺︎ ☹︎
          ☺︎ ☹︎ ☺︎ ☹︎ ☺︎ ☹︎ ☺︎ ☹︎ ☺︎ ☹︎ ☺︎ ☹︎ ☺︎ ☹︎ ☺︎ ☹︎ ☺︎ ☹︎ ☺︎ ☹︎ ☺︎ ☹︎ ☺︎ ☹︎ ☺︎ ☹︎ ☺︎ ☹︎ ☺︎ ☹︎ ☺︎ ☹︎ ☺︎ ☹︎ ☺︎ ☹︎ ☺︎ ☹︎ ☺︎ ☹︎ ☺︎ ☹︎ ☺︎ ☹︎ ☺︎ ☹︎ ☺︎ ☹︎ ☺︎ ☹︎ ☺︎ ☹︎ ☺︎ ☹︎ ☺︎ ☹︎ ☺︎ ☹︎ ☺︎ ☹︎ ☺︎ ☹︎ ☺︎ ☹︎ ☺︎ ☹︎ ☺︎ ☹︎ ☺︎ ☹︎ ☺︎ ☹︎ ☺︎ ☹︎ ☺︎ ☹︎ ☺︎ ☹︎ ☺︎ ☹︎ ☺︎ ☹︎ ☺︎ ☹︎ ☺︎ ☹︎ ☺︎ ☹︎ ☺︎ ☹︎ ☺︎ ☹︎ ☺︎ ☹︎ ☺︎ ☹︎ ☺︎ ☹︎ ☺︎ ☹︎ ☺︎ ☹︎ ☺︎ ☹︎ ☺︎ ☹︎ ☺︎ ☹︎ ☺︎ ☹︎ ☺︎ ☹︎ ☺︎ ☹︎ ☺︎ ☹︎ ☺ ☺︎ ☹︎ ☺︎ ☹︎ ☺︎ ☹︎ ☺︎ ☹︎ ☺︎ ☹︎ ☺︎ ☹︎ "
          required
        ></textarea>
        <p>current mood:</p>
        <select
          value={mood}
          onChange={(e) => setMood(e.target.value)}
          name="mood"
          className="dropdown"
          required
        >
          <option className="selected-option" selected hidden required>
            ~*-/̷̲̙̰̠͌͊͆/̶͕̏ ̶̳͕͍̒/̵̻̮͕͘.̶͚̥̊̎̐ ̴̢͖͊́̈́ͅ/̸͍͗�̸̲̙̹͒̿̆̔�̴̡̠̪̩̀.̶̥̥͐̈́͠f̸̪̿/̶̫̋̓?̸̠̂m̴̥̩̿̈́͆͒ ̶̬̰̠̉ơ̶̡͚̪͆̍ ̴̡̘͗̐o̶͈͕̖͉͋̿ ̷͖̃̇d̸̜̠̥̫͋̎̅ ̸̞̝̱̈́͋́͜(̵̥́̈́)̶̘͑͗͠;̷̢͈̈́͆̆/̵̞͎͐́̓͝ ̷̖̺͙͑̅/̸̼̗̭̰̑̈́͗̆/̵̱̾̏̋͝/̸̯̍̽~̶̡͎̉͝#̶̳͙̟͊͒̚$̴̧͇̃ȉ̶̝͙̈́̂̕x̶̳̗̑̌͘͜X̶̧̰̾{" "}
          </option>{" "}
          {props.moods.map((mood) => {
            return <option value={mood.id}>{mood.feeling}</option>;
          })}{" "}
        </select>
        <div className="gif-container">
          <img
            className="smile-gif"
            src="https://i.imgur.com/yJ3cnoO.gif"
            alt="happy sad gif"
            title=":)"
          />
        </div>
        <input
          name="submit"
          type="submit"
          value="scream into the digital abyss"
          className="submit-button"
        ></input>
      </form>
    </div>
  );
}

export default VoidForm;

