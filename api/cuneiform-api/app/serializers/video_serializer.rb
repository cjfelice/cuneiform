class VideoSerializer
  include FastJsonapi::ObjectSerializer
  attributes :video_url, :canvase_id, :user_id, :created_at, :updated_at
end
