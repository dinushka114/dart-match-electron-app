import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FirstPage() {
  const [names, setNames] = useState(Array(32).fill(""));
  const [groups, setGroups] = useState([]);
  const navigate = useNavigate();

  const Button = ({ children, className, ...props }) => (
    <button
      className={`px-6 py-3 bg-gradient-to-r from-yellow-700 to-yellow-500 text-white font-serif border-4 border-brown-800 rounded-lg hover:scale-105 hover:shadow-lg transform transition-all ${className}`}
      {...props}
    >
      {children}
    </button>
  );

  const Card = ({ children, className }) => (
    <div
      className={`bg-gray-800 text-white rounded-lg shadow-lg p-4 border-2 border-gray-600 bg-[url('/path/to/stone-texture.jpg')] bg-cover ${className}`}
    >
      {children}
    </div>
  );

  const CardContent = ({ children, className }) => (
    <div className={`p-2 ${className}`}>{children}</div>
  );

  const Input = ({ className, ...props }) => (
    <input
      className={`border-2 border-gray-600 p-3 rounded-lg bg-gray-700 text-white font-serif placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 ${className}`}
      {...props}
    />
  );

  const handleNameChange = (index, value) => {
    const newNames = [...names];
    newNames[index] = value;
    setNames(newNames);
  };

  const drawGroups = () => {
    const shuffledNames = [...names].sort(() => Math.random() - 0.5);
    const newGroups = [];
    for (let i = 0; i < 8; i++) {
      newGroups.push(shuffledNames.slice(i * 4, i * 4 + 4));
    }
    setGroups(newGroups);
    navigate('/tree', { state: { groups: newGroups } })
  };

  return (
    <div className="min-h-screen bg-[url('https://wallpapersok.com/images/high/sport-three-darts-in-dartboard-f4wp5p7au637wh4r.jpg')] bg-cover bg-center text-white flex flex-col items-center py-10">
      <h1 className="text-4xl font-bold mb-8 text-yellow-500">Darts Tournament - Enter Names</h1>
      <div className="grid grid-cols-4 gap-4 w-full max-w-4xl mb-8">
        {names.map((name, index) => (
          <input
            key={index}
            value={name}
            placeholder={`Player ${index + 1}`}
            onChange={(e) => handleNameChange(index, e.target.value)}
            className={`border-2 border-gray-600 p-3 rounded-lg bg-gray-700 text-white font-serif placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500`}
          />
        ))}
      </div>
      <Button onClick={drawGroups} className="mt-6 hover:bg-yellow-600">
        Draw Groups
      </Button>

      {groups.length > 0 && (
        <div className="mt-8 w-full max-w-4xl">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-500">Groups</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {groups.map((group, i) => (
              <Card key={i} className="bg-gray-800 p-4 rounded-xl shadow-md">
                <CardContent>
                  <h3 className="text-lg font-semibold mb-2 text-yellow-400">Group {i + 1}</h3>
                  <ul>
                    {group.map((player, j) => (
                      <li key={j} className="text-gray-300">{player || "TBA"}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
