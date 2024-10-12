import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Github } from 'lucide-react';
import { profiles } from '../../config/UserData';

// Function to generate avatar URL
const getAvatarUrl = (username: string) => {
  // Use the username as a seed for the random avatar
  return `https://api.dicebear.com/9.x/pixel-art/svg?seed=${username}`;
};

export default function GitHubProfiles() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto py-8 px-4 flex-grow">
        <h1 className="text-4xl font-bold mb-8 text-center bg-yellow-300 p-4 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          FirstCommit
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {profiles.map((profile) => (
            <Link
              href={`https://github.com/${profile.username}`}
              key={profile.id}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="hover:translate-x-1 hover:-translate-y-1 transition-transform duration-200 bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <CardHeader className="flex flex-row items-center gap-4 bg-blue-300 p-4 border-b-4 border-black">
                  <Avatar className="w-16 h-16 border-4 border-black">
                    <AvatarImage
                      src={getAvatarUrl(profile.username)}
                      alt={profile.name}
                    />
                    <AvatarFallback className="bg-red-400 text-xl font-bold">
                      {profile.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h2 className="text-2xl font-bold">{profile.name}</h2>
                    <p className="text-lg font-semibold">@{profile.username}</p>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <p className="text-lg font-medium">{profile.bio}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
      <footer className="mt-12 bg-green-300 border-t-4 border-black p-4">
        <div className="container mx-auto flex justify-between items-center">
          <p className="text-lg font-bold">
            © 2024 First Commit. MIT License.
          </p>
          <Link
            href="https://github.com/swaindhruti/First-Commit"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors duration-200"
          >
            <Github size={24} />
            <span className="font-bold">View on GitHub</span>
          </Link>
        </div>
      </footer>
    </div>
  );
}
