class RemoveLikesAndThumbnailIdFromPhotos < ActiveRecord::Migration
  def change
    remove_column :photos, :thumbnail_id
    remove_column :photos, :likes
  end
end
