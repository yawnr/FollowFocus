class CreateAlbums < ActiveRecord::Migration
  def change
    create_table :albums do |t|
      t.string :title, null: false
      t.text :description
      t.integer :user_id, null: false, index: true

      t.timestamps null: false
    end
  end
end
