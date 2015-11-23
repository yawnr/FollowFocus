class AddDateTimeToPhotos < ActiveRecord::Migration
  def change
    add_column :photos, :date_time, :string
  end
end
