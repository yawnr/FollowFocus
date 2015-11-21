class AddAttachmentToPhotos < ActiveRecord::Migration
  def change
    add_attachment :photos, :photo_attachment
  end
end
