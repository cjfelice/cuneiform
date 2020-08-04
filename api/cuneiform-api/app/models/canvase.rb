class Canvase < ApplicationRecord
  belongs_to :user

  has_many :comments
  has_many :images
  has_many :likes
  has_many :videos
end
