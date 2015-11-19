class Album < ActiveRecord::Base

  validates :user_id, presence: true
  validates :title, presence: true

  belongs_to :user

  def self.this_user_albums(user_id)
    albums = []

    Album.all.each do |album|
      albums << album if album.user_id == user_id
    end

    return albums
  end

end
