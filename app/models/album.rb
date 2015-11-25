class Album < ActiveRecord::Base

  include PgSearch
  multisearchable :against => [:title, :description]


  validates :user_id, presence: true
  validates :title, presence: true

  has_many :photos
  belongs_to :user

  def self.this_user_albums(user_id)
  #   albums = []
  #
  #   Album.all.each do |album|
  #     albums << album if album.user_id == user_id
  #   end
  #
  #   return albums
  return User.find(user_id).albums
  end
end
