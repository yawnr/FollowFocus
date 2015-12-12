class Tag < ActiveRecord::Base

  validates :tag, :photo_id, presence: true

  belongs_to :photo

end
