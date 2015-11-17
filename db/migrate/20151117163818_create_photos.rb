class CreatePhotos < ActiveRecord::Migration
  def change
    create_table :photos do |t|
      t.string :title
      t.string :url, null: false
      t.string :exif_data
      t.integer :likes, null: false, default: 0
      t.integer :thumbnail_id, null: false, index: true
      t.integer :user_id, null: false, index: true
      t.integer :album_id, null: false, index: true

      t.timestamps null: false
    end
  end
end
