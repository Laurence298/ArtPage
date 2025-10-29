export type Video = {
  id: string;
  file_name: string;
  file_url: string;
  title: string;
  description: string;
  tags: string[];
  created_at: string;
  updated_at: string;
};

// Type for the full JSON response
export type GifResponse = {
  success: boolean;
  data: Video[];
};