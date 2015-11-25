class Photo < ActiveRecord::Base

  validates :user_id, :album_id, presence: true

  has_attached_file :photo_attachment, styles: {large: "1400x1400>", medium: "1000x1000>", small: "750x750>", thumb: "200x200>", small_thumb: "100x100>"}
  validates_attachment_content_type :photo_attachment, content_type: /\Aimage\/.*\Z/

  belongs_to :album
  belongs_to :user

  has_many :comments

  attr_reader :photo_attachment_content_type

  def self.current_album_photos(album_id)
    return Album.find(album_id).photos
  end

  def self.generate_gallery_photos
    Photo.all.limit(10).order("RANDOM()")
  end

  def self.get_album_covers(user_id)
    Photo.find_by_sql([<<-SQL, user_id])
      SELECT
        photos.*
      FROM
        photos
      WHERE
        photos.created_at IN (
        SELECT
          MAX(new_photos.created_at) AS newest
        FROM
          albums
        JOIN
          photos AS new_photos ON new_photos.album_id = albums.id
        GROUP BY
          albums.id
        ) AND photos.user_id = 2
    SQL
  end


end
