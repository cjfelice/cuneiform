class LikeSerializer
  include FastJsonapi::ObjectSerializer
  attributes :canvase_id, :user_id, :created_at, :updated_at
end
