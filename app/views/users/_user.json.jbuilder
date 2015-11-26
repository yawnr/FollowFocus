json.extract! user, :id, :username
json.profile_photo_url image_path(user.profile_photo.url)
json.profile_photo_thumb image_path(user.profile_photo.url(:medium))
