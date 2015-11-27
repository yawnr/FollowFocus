json.extract! user, :id, :username
json.profile_photo_url image_path(user.profile_photo.url)
json.profile_photo_thumb image_path(user.profile_photo.url(:medium))
json.profile_photo_small_thumb image_path(user.profile_photo.url(:large_thumb))
json.album_count user.albums.length
json.photo_count user.photos.length
if (user.photos.last)
  json.last_active user.photos.last.created_at.strftime("%b %d, %Y")
end
