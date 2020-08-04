class User < ApplicationRecord
  has_many :canvases
  has_many :comments
  has_many :images
  has_many :likes
  has_many :videos
end
