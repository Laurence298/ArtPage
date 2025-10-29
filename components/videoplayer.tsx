import { Video } from "@/types/videotypes";

type VideoPlayerProps = {
  video: Video | null;
};

export function VideoPlayer({ video }: VideoPlayerProps) {
  if (!video) {
    return (
        <p className="text-gray-500">Click a video to play</p>
    );
  }

  return (
   <>
      <div className="w-full max-w-[600px] h-[450px] bg-primary rounded-lg overflow-hidden flex items-center justify-center">
        <img
          src={
            video.file_url ||
            "https://nqvbvntkywpvuabmyaqb.supabase.co/storage/v1/object/public/gifs/uploads/1761676085171-Cygnus.gif"
          }
          alt={video.title}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Bottom action items */}
      <div className="flex justify-center gap-6">
        <button className="btn btn-sm btn-primary flex items-center gap-2">
          Share
        </button>
        <button className="btn btn-sm btn-secondary flex items-center gap-2">
          download
        </button>
      </div>
    </>
  );
}
