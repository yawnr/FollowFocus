class Photo < ActiveRecord::Base

  validates :user_id, :album_id, presence: true

  has_attached_file :photo_attachment, styles: {medium: "300x300>", large_thumb: "200x200>", thumb: "100x100>"}
  validates_attachment_content_type :photo_attachment, content_type: /\Aimage\/.*\Z/

  belongs_to :album
  belongs_to :user

  has_many :comments

  attr_reader :photo_attachment_content_type

  def self.current_album_photos(album_id)
    # photos = []
    #
    # Photo.all.each do |photo|
    #   photos << photo if photo.album_id == album_id
    # end
    #
    # return photos

    return Album.find(album_id).photos
  end

end
