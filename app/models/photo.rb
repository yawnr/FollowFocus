class Photo < ActiveRecord::Base

  validates :url, :user_id, :album_id, presence: true

  belongs_to :album
  belongs_to :user

  def self.current_album_photos(album_id)
    photos = []

    Photo.all.each do |photo|
      photos << photo if photo.album_id == album_id
    end

    return photos
  end

end
