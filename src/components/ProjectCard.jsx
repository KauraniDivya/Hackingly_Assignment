import React from 'react';
import sankalp from "./images/sankalp.jpg";
import btb from "./images/btb.jpeg";
import sih from "./images/sih.jpeg";

const ProjectCard = () => {
  const staticEventData = [
    {
      image: 'https://firebasestorage.googleapis.com/v0/b/studymate-c44e8.appspot.com/o/Screenshot%202023-09-13%20001323.png?alt=media&token=a29363df-f374-4ae3-ae24-d66956dbfdf7',
      title: 'E-Challan Collection',
      date: 'January 16, 2024',
      time: '9:00 AM',
      mode: 'Online',
      location: 'Virtual',
      about: 'During the 36-hour live hackathon, our team built a project on the real-world problem -"E Challan Payment" and provided an effective and best solution to the problem of Lower E-challan Collection which is much better than the existing system.',
    },
    {
      image: btb,
      title: 'The Hide Out',
      date: 'January 21, 2024',
      time: '4:30 PM',
      mode: 'Online',
      location: 'Virtual',
      about: 'We have created fully functional website for our college canteen, named “THE HIDE OUT” which not only helps in saving time but is also more productive and efficient using html, css, js, node js and mongodb',
    },
    {
      image: sankalp,
      title: 'Sankalp',
      date: 'January 22, 2024',
      time: '7:00 PM',
      mode: 'Offline',
      location: 'Jaipur',
      about: 'Our team focused on creating, dreaming, teamwork, and building together. Each part of the hackathon was a step forward, showcasing our tech skills and collaborative spirit.',
    },
  ];

  return (
    <div className="flex flex-wrap justify-center">
      {staticEventData.map((event, index) => (
        <div key={index} className="max-w-md mx-auto bg-white rounded-md overflow-hidden mb-4" style={{ width: "300px", height: "400px", position: "relative", marginBottom: "40px", boxShadow: "10px 15px 15px 10px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05)" }}>
          {/* Event Image */}
          <img className="h-40 w-full object-cover object-center" src={event.image} alt={event.title} style={{ height: "150px" }} />
          <span className="text-right bg-blue-500 px-4 py-2 rounded-md text-white" style={{ fontSize: "0.8rem", display: "inline-block", position: "absolute", top: "145px", right: "10px", color: "darkblue", fontWeight: "700" }}>{event.date}</span>
          <h2 className="text-2xl font-semibold mb-2" style={{ marginTop: "30px", fontWeight: "bold" }}>{event.title}</h2>
          <p className="text-sm mb-4" style={{ overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", marginLeft: "10px", marginRight: "10px" }}>{event.about}</p>
          <div className="flex justify-between mb-2 ml-2 mr-2">
            <p className="text-sm"><span style={{ color: "darkblue", fontWeight: "600" }}>Mode: </span>{event.mode}</p>
            <p className="text-sm"><span style={{ color: "darkblue", fontWeight: "600" }}>Location: </span> {event.location}</p>
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded focus:outline-none focus:shadow-outline-blue transition duration-300" style={{ fontSize: "0.8rem", backgroundColor: "darkblue", color: "white", fontWeight: "500", marginTop: "20px", width: "80%" }}>Read More</button>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
