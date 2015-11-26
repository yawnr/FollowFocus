json.extract! photo, :id, :title, :user_id, :album_id, :lat, :lng, :aperture, :iso, :exposure_time, :camera_model, :date_time
json.photo_attachment_url image_path(photo.photo_attachment.url)
json.large_thumb image_path(photo.photo_attachment.url(:large_thumb))
json.small image_path(photo.photo_attachment.url(:small))
json.medium image_path(photo.photo_attachment.url(:medium))
json.large image_path(photo.photo_attachment.url(:large))
json.username User.find(photo.user_id).username
json.album_name Album.find(photo.album_id).title
json.num_comments photo.comments.length
json.created_at photo.created_at
