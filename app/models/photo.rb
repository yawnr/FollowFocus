class Photo < ActiveRecord::Base

  validates :url, :likes, :thumbnail_id, :user_id, :album_id, presence: true

  belongs_to :album
  belongs_to :user
  has_one :thumbnail

end
