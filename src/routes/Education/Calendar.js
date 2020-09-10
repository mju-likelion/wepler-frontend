import React, { Component } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import styled from "styled-components";

const localizer = momentLocalizer(moment);

const Container = styled.div`
background: #404A41;
`;

class Calendars extends Component {
    state = {
        events: [
            {
                title:"교육 3",
                allDay:false,
                start: new Date(2020,7,11,10,0),
                end: new Date(2020,7,11,10,30)
              },
              {
                title:"교육 4",
                allDay:false,
                start: new Date(2020,7,15,10,0),
                end: new Date(2020,7,15,10,30)
              }
        ]
    };

    render() {
        return (
            <Container>
            <div className="App">
                <Calendar
                    localizer={localizer}
                    defaultDate={new Date()}
                    defaultView="month"
                    events={this.state.events}
                    style={{ height: "100vh" }}
                />
            </div>
            </Container>
        );
    }
}


export default Calendars;
