class AddOrientationToPhotos < ActiveRecord::Migration
  def change
    add_column :photos, :orientation, :integer
  end
end
