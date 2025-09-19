import Image from 'next/image';

async function getRobot(id) {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      next: { revalidate: 60 } // Cache for 60 seconds
    });
    
    if (!res.ok) {
      throw new Error(`Failed to fetch robot ${id}`);
    }
    
    return res.json();
  } catch (error) {
    console.error('Error fetching robot:', error);
    return null;
  }
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const robot = await getRobot(id);
  
  if (!robot) {
    return {
      title: 'Robot Not Found',
      description: 'The requested robot was not found',
    };
  }
  
  return {
    title: `${robot.name} - RoboFriend`,
    description: `Profile of ${robot.name} - ${robot.email}`,
  };
}

export default async function RobotDetailPage({ params }) {
  const { id } = await params;
  const robot = await getRobot(id);
  
  if (!robot) {
    return (
      <div className="tc pa5">
        <h2>Robot Not Found</h2>
        <p>The robot with ID {params.id} does not exist.</p>
      </div>
    );
  }

  return (
    <div className="tc pa4">
      {/* Robot Image */}
      <div className="mb4">
        <Image
          src={`https://robohash.org/${id}?size=300x300`}
          alt={robot.name}
          width={300}
          height={300}
          className="br3 shadow-4"
          priority
        />
      </div>
      
      {/* Robot Info */}
      <div className="bg-white br3 pa4 shadow-3 dib">
        <h1 className="f2 mb3">{robot.name}</h1>
        <p className="f4 mb2">
          <strong>Email:</strong> {robot.email}
        </p>
        <p className="f4 mb2">
          <strong>Phone:</strong> {robot.phone}
        </p>
        <p className="f4 mb3">
          <strong>Company:</strong> {robot.company?.name}
        </p>
      </div>
      
      {/* Back Button */}
      <div className="mt4">
        <a 
          href="/" 
          className="f5 link dim br-pill ph3 pv2 mb2 dib white bg-blue"
        >
          ← Back to All Robots
        </a>
      </div>
    </div>
  );
}