json.extract! comment, :id, :body, :user_id, :photo_id
json.created_at comment.created_at.strftime("%b %d, %Y")
json.username User.find(comment.user_id).username
json.user_photo image_path(User.find(comment.user_id).profile_photo.url(:medium))
