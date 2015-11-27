json.extract! album, :id, :title, :description, :user_id

if album.photos.first
  json.first_photo_thumb image_path(album.photos.first.photo_attachment.url(:thumb))
else
  json.first_photo_thumb ""
end

json.photo_count album.photos.length

if album.photos.last
  json.last_updated album.photos.last.created_at.strftime("%b %d, %Y")
else
  json.last_updated album.created_at.strftime("%b %d, %Y")
end
