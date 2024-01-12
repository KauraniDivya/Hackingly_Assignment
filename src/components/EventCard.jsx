import React from 'react';
import btb from "./images/btb.jpeg";
import sih from "./images/sih.jpeg";

const EventCard = () => {
  const staticEventData = [
    {
      image: 'https://firebasestorage.googleapis.com/v0/b/studymate-c44e8.appspot.com/o/hackingly.png?alt=media&token=90d248b9-9c7b-4608-ab89-00fab39161c2',
      title: 'Hackingly',
      date: 'January 16, 2024',
      time: '9:00 AM',
      mode: 'Online',
      location: 'Virtual',
      about: 'Hackingly, an early-stage startup specializing in online hackathon conduction platforms similar to AngelHacks or Devpost is seeking a talented and motivated Frontend Development Intern to join our growing team. As a key player in our startup, you will have the opportunity to contribute to developing innovative solutions that empower developers and organizers worldwide.',
    },
    {
      image: btb,
      title: 'Break The Barrier',
      date: 'January 21, 2024',
      time: '4:30 PM',
      mode: 'In-person',
      location: 'City Hall',
      about: 'Government of Gujarat has developed a policy for providing assistance to Startups/ Innovation. Under this scheme, any individual/ group of individuals having an innovative idea/ Concept will be eligible and/ or Universities/ education institutions, Incubation Centre/ PSUs/ R&D Institutions/ Private and other establishments will be eligible as an institution to support and mentor to innovators as approved by Committee. Startups in an economy\'s technology sectors are an important indicator of technological performance for several reasons.',
    },
    {
      image: sih,
      title: 'Smart India Hackathon',
      date: 'January 22, 2024',
      time: '7:00 PM',
      mode: 'Hybrid',
      location: 'Conference Center',
      about: 'Government of Gujarat has developed a policy for providing assistance to Startups/ Innovation. Under this scheme, any individual/ group of individuals having an innovative idea/ Concept will be eligible and/ or Universities/ education institutions, Incubation Centre/ PSUs/ R&D Institutions/ Private and other establishments will be eligible as an institution to support and mentor to innovators as approved by Committee. Startups in an economy\'s technology sectors are an important indicator of technological performance for several reasons.',
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

export default EventCard;
