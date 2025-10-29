import { Video } from "@/types/videotypes";

type VideoCardProps = {
  video: Video;
  onClick?: (video: Video) => void; // optional click handler
};

export function VideoCard({ video, onClick }: VideoCardProps) {
  return (
    <li
      key={video.id}
      className="card bg-base-200 p-4 rounded-lg shadow hover:shadow-lg transition cursor-pointer"
      onClick={() => onClick && onClick(video)}
    >
      <h3 className="font-bold text-lg">{video.title}</h3>
      {video.title && <p className="text-sm text-gray-600">{video.title}</p>}
    </li>
  );
}
