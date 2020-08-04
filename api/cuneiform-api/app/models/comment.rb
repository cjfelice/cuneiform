class Comment < ApplicationRecord
  belongs_to :canvase
  belongs_to :user
end
