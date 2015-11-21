json.extract! photo, :id, :title, :exif_data, :user_id, :album_id
json.photo_attachment_url image_path(photo.photo_attachment.url)
