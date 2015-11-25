json.total_count @search_results.total_count

json.results do
  json.array! @search_results.map(&:searchable) do |result|
    if result.class == User
      json.partial! "/users/user", user: result
      json._type "User"
    elsif result.class == Album
      json.partial! "api/albums/album", album: result
      json._type "Album"
    else
      json.partial! "api/photos/photo", photo: result
      json._type "Photo"
    end
  end
end
