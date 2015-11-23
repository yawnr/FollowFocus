class AddExifDataColumnsToPhotos < ActiveRecord::Migration
  def change
    remove_column :photos, :exif_data
    add_column :photos, :lat, :float
    add_column :photos, :lng, :float
    add_column :photos, :aperture, :decimal
    add_column :photos, :iso, :integer
    add_column :photos, :exposure_time, :string
    add_column :photos, :camera_model, :string
  end
end
