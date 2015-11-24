class Photo < ActiveRecord::Base

  validates :user_id, :album_id, presence: true

  has_attached_file :photo_attachment, styles: {medium: "300x300>", large_thumb: "200x200>", thumb: "100x100>"}
  validates_attachment_content_type :photo_attachment, content_type: /\Aimage\/.*\Z/

  belongs_to :album
  belongs_to :user

  has_many :comments

  attr_reader :photo_attachment_content_type
  attr_accessor :photo_attachment_file_name

  def self.current_album_photos(album_id)
    return Album.find(album_id).photos
  end

  def self.generate_gallery_photos
    Photo.all.limit(10).order("RANDOM()")
  end

  def self.get_album_covers(user_id)
    # Photo.find_by_sql(<<-SQL, user_id)
    #   SELECT
    #     *
    #   FROM
    #     photos
    #   WHERE
    #     user_id = ? AND timestamp = (
    #       SELECT
    #         MAX(timestamp)
    #       FROM
    #         photos latest
    #       WHERE
    #         album_id = photos.album_id
    #     )
    # SQL
  end


end
