"use client";
import { useEffect,useState } from "react";
import { VideoPlayer } from "@/components/videoplayer";
import { VideoCard } from "@/components/videocard";
import { GifResponse,Video } from "@/types/videotypes";

export default function Home() {
  const [selected_videos, selectVideo] = useState<Video|null>(null) 
  const [videos, setVideos] = useState<Video[]>([]);
  const [searchQuery, setSearchQuery] = useState("");


   useEffect(() => {
    async function fetchGifs() {
      try {
        const res = await fetch("/api/videos"); // replace with your endpoint
        const data: GifResponse = await res.json();
        setVideos(data.data); // directly set the array
      } catch (error) {
        console.error("Error fetching GIFs:", error);
      }
    }
    fetchGifs();
  }, []);
 const filteredVideos = videos.filter((vid) => {
  const q = searchQuery.toLowerCase();
  return (
    vid.title.toLowerCase().includes(q) ||
    vid.description.toLowerCase().includes(q) ||
    vid.file_name.toLowerCase().includes(q) ||
    vid.tags.some((tag) => tag.toLowerCase().includes(q))
  );
});

  return (
    <main className="container mx-auto grid grid-cols-2 grid-rows-3 gap-8 p-4">
      <section className="bg-base-200 p-4 rounded-lg shadow-md mt-6 flex flex-col items-center gap-4">
          {/* GIF / Player */}
        <VideoPlayer video={selected_videos}/>
      </section>

      {/* Video List Section */}
  <section className="bg-base-100 p-8 rounded-lg shadow-md flex flex-col gap-4">
    {/* Static Search Bar */}
    <div className="form-control w-full">
      <input
        type="text"
        placeholder="Search videos..."
        className="input input-bordered w-full"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
         <ul className="grid grid-cols-3 gap-4">
        {filteredVideos.map((vid) => (
          <VideoCard key={vid.id} video={vid} onClick={selectVideo} />
        ))}
      </ul>
      </section>
    </main>
  );
}
