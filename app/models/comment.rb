class Comment < ActiveRecord::Base

  validates :body, :user_id, :photo_id, presence: true
  validates :body, length: { minimum: 1 }

  belongs_to :user
  belongs_to :photo

  def self.this_photo_comments(photo_id)
    comments = []

    Comment.all.each do |comment|
      comments << comment if comment.photo_id == photo_id
    end

    return comments
  end

end
