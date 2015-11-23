json.extract! photo, :id, :title, :user_id, :album_id
json.photo_attachment_url image_path(photo.photo_attachment.url)
json.file_name photo.photo_attachment_file_name
json.username User.find(photo.user_id).username
json.album_name Album.find(photo.album_id).title
json.num_comments photo.comments.length
