json.extract! user, :id, :username
json.profile_photo_url asset_path(user.profile_photo.url)
