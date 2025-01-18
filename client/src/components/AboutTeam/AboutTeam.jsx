import React, { useState } from 'react';

function AboutTeam() {
  const [selectedMember, setSelectedMember] = useState(null);

  const teamMembers = [
    {
      name: 'Utkarsh Raj',
      image: 'https://avatars.githubusercontent.com/u/107660449?v=4',
      linkedin: 'https://www.linkedin.com/in/utkarsh-raj032/',
       },
    {
      name: 'Abhishek Joshi',
      image: 'https://i.ibb.co/ZcK8SPs/profilepic.jpg',
      linkedin: 'https://www.linkedin.com/in/abhishekj1998/',
      },
    {
      name: 'Anikesh Sharma',
      image: 'https://avatars.githubusercontent.com/u/91007286?v=4',
      linkedin: 'https://linkedin.com/in/bobjohnson',
         bio: 'Anikesh is an expert UI/UX designer, crafting seamless and user-friendly interfaces with a focus on accessibility and performance.',
    },
  ];

  const handleCardClick = (member) => {
    setSelectedMember(member);
    setTimeout(() => setSelectedMember(null), 2000); // Flash effect duration
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 flex flex-col items-center py-12">
      <h1 className="text-5xl font-extrabold text-white mb-12">Meet Our Team</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-xl p-8 text-center cursor-pointer transform transition-transform hover:scale-105 hover:shadow-2xl duration-300 relative"
            onClick={() => handleCardClick(member)}
          >
            <div
              className={`relative ${selectedMember === member ? 'flash-effect' : ''}`}
            >
              <img
                src={member.image}
                alt={`${member.name}'s picture`}
                className="w-56 h-56 rounded-full mx-auto mb-4 shadow-lg transition-all duration-500 transform"
              />
            </div>
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">{member.name}</h2>
            <p className="text-lg text-gray-500 mb-4">{member.role}</p>
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 mt-2 inline-block"
            >
              LinkedIn
            </a>
          </div>
        ))}
      </div>

      {selectedMember && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-all duration-500 ease-in-out opacity-100">
          <div
            className="bg-white rounded-lg shadow-2xl p-6 max-w-lg mx-4 transform transition-all scale-105"
            onClick={() => setSelectedMember(null)} 
          >
            <h2 className="text-3xl font-bold mb-2">{selectedMember.name}</h2>
            <p className="text-gray-700 mb-4">{selectedMember.role}</p>
            <p className="text-gray-600 mb-4">{selectedMember.bio}</p>
            <a
              href={selectedMember.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Visit LinkedIn Profile
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default AboutTeam;
