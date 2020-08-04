class ImageSerializer
  include FastJsonapi::ObjectSerializer
  attributes :image_url, :canvase_id, :user_id, :created_at, :updated_at
end
