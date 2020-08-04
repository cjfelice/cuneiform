class CanvaseSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :music_id, :description, :user_id, :created_at, :updated_at

  has_many :comments
  has_many :images
  has_many :likes
  has_many :videos
end
