import { useState } from "react";
import "../styles/TrainForm.css";

function TrainForm() {

    const [train, setTrain] = useState({
        trainId: "",
        trainName: "",
        speed: "",
        location: "",
        platform: "",
        track: "",
        signal: "Green",
        direction: "Up",
        status: "Running"
    });

    const handleChange = (e) => {
        console.log(e);
        // console.log(e.target.value); 
        setTrain({
            ...train,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(train);

        alert("Train Data Saved Successfully");
    };

    return (
        <div className="form-container">

            <h1>Train Traffic Control System</h1>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="trainId"
                    placeholder="Train ID"
                    value={train.trainId}
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    name="trainName"
                    placeholder="Train Name"
                    value={train.trainName}
                    onChange={handleChange}
                    required
                />

                <input
                    type="number"
                    name="speed"
                    placeholder="Speed (km/h)"
                    value={train.speed}
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    name="location"
                    placeholder="Current Location"
                    value={train.location}
                    onChange={handleChange}
                    required
                />

                <input
                    type="number"
                    name="platform"
                    placeholder="Platform Number"
                    value={train.platform}
                    onChange={handleChange}
                    required
                />

                <input
                    type="number"
                    name="track"
                    placeholder="Track Number"
                    value={train.track}
                    onChange={handleChange}
                    required
                />

                <select
                    name="signal"
                    value={train.signal}
                    onChange={handleChange}
                >
                    <option>Green</option>
                    <option>Yellow</option>
                    <option>Red</option>
                </select>

                <select
                    name="direction"
                    value={train.direction}
                    onChange={handleChange}
                >
                    <option>Up</option>
                    <option>Down</option>
                </select>

                <select
                    name="status"
                    value={train.status}
                    onChange={handleChange}
                >
                    <option>Running</option>
                    <option>Stopped</option>
                    <option>Delayed</option>
                </select>

                <button type="submit">
                    Save Train
                </button>

            </form>

        </div>
    );
}

export default TrainForm;