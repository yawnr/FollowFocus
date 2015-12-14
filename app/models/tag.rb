class Tag < ActiveRecord::Base

  validates :tag, :photo_id, presence: true

  belongs_to :photo

  def self.generate_explore_tags
    tags = Tag.group('tag').order('count_id DESC').limit(20).count(:id)
    new_tags = []
    tags.each do |tag|
      new_tags << tag.first
    end
    new_tags
  end

end
