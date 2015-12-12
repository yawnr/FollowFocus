class AddHeaderPhotoToUsers < ActiveRecord::Migration
  def change
    add_attachment :users, :header_photo
  end
end
