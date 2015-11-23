class ChangeApertureToString < ActiveRecord::Migration
  def change
    change_column :photos, :aperture, :string
  end
end
