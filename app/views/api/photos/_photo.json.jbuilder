json.extract! photo, :id, :title, :user_id, :album_id, :lat, :lng, :aperture, :iso, :exposure_time, :camera_model, :date_time
json.photo_attachment_url image_path(photo.photo_attachment.url)
json.file_name photo.photo_attachment_file_name
json.username User.find(photo.user_id).username
json.album_name Album.find(photo.album_id).title
json.num_comments photo.comments.length
json.created_at photo.created_at
# json.lat
# json.lng
# json.aperture
# json.iso
# json.exposure_time
# json.camera_model
# json.date_time
