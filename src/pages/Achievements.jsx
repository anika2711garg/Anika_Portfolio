// pages/Achievements.jsx
import Scene from "../components/3d/Scene";
import FloatingCone from "../components/3d/FloatingCone";
import BouncingSphere from "../components/3d/BouncingSphere";
import ETY from "../assets/ETY.png";

export default function Achievements() {
  const achievements = [
    {
      image: ETY,
      title: "ETY Company",
      subtitle: "MERN Stack Developer Intern",
      description: "Developed scalable full-stack web applications using the MERN stack. Improved API performance by 15% through optimization and efficient database indexing.",
    },
    {
      title: "SPC Core Member",
      subtitle: "IIIT Vadodara",
      description: "Mentoring 400+ students on data structures, algorithms, and technical interview preparation. Managing student placement activities.",
    },
    {
      title: "Cultural Lead",
      subtitle: "Krieva Fest",
      description: "Managed the event lifecycle for IIITV’s cultural fest 'Krieva'. Theatre performer and event organizer.",
    },
    {
      title: "Campus Leadership",
      subtitle: "IIIT Vadodara",
      description: "Robotics Champion, Hostel General Secretary, and Core Member of various campus committees.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#0b0c10] px-6 py-20 text-white overflow-hidden">
      <div className="relative z-10 text-center mb-16">
        <h2 className="text-5xl font-bold mb-3">Experience & Leadership</h2>
        <p className="text-xl text-red-400">My Professional and Academic Journey</p>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
        {achievements.map((a, index) => (
          <div
            key={index}
            className="bg-[#1f1f1f] hover:scale-105 transition-all duration-500 rounded-xl shadow-lg overflow-hidden flex flex-col h-full"
          >
            {a.image && (
              <img
                src={a.image}
                alt={a.title}
                className="w-full h-48 object-contain bg-[#0d0d0d] p-6"
              />
            )}
            <div className="p-6 text-center flex-grow flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-white mb-1">{a.title}</h3>
              <p className="text-md text-pink-400 mb-2">{a.subtitle}</p>
              <p className="text-sm text-gray-300">{a.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <Scene>
          <FloatingCone />
          <BouncingSphere />
          <FloatingCone position={[1, 2, -2]} />
          <BouncingSphere position={[-2, 0.5, 1]} />
        </Scene>
      </div>
    </div>
  );
}
