class CreateTags < ActiveRecord::Migration
  def change
    create_table :tags do |t|
      t.string :tag, null: false
      t.integer :photo_id, null: false, index: true

      t.timestamps null: false
    end
  end
end
