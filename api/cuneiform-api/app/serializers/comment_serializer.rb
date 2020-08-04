class CommentSerializer
  include FastJsonapi::ObjectSerializer
  attributes :remark, :canvase_id, :user_id, :created_at, :updated_at
end
