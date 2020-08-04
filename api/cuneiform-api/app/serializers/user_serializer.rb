class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :email, :password, :location

  has_many :canvases
  has_many :images
  has_many :comments
  has_many :likes
  has_many :videos
end
