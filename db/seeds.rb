Album.destroy_all
Photo.destroy_all

5.times do |i|
  5.times do |j|
    album = Album.create({title: "Album #{j}", description: "Album description #{j}", user_id: i})
    Photo.create({title: "testphoto", url: "https://paulweeksphotography.smugmug.com/Portfolio-Gallery/i-zHH9V7b/0/XL/Electric%20Roller%20Coaster-XL.jpg", exif_data: "bunchashit", user_id: 2, album_id: album.id})
    Photo.create({title: "testphoto2", url: "https://i.imgur.com/IA641LW.jpg", exif_data: "bunchaothershit", user_id: 2, album_id: album.id})
    Photo.create({title: "testphoto3", url: "https://i.imgur.com/NS2oHJN.jpg", exif_data: "stuff", user_id: 2, album_id: album.id})
    Photo.create({title: "testphoto4", url: "https://i.imgur.com/er3gAWC.jpg", exif_data: "ok", user_id: 2, album_id: album.id})
    Photo.create({title: "testphoto5", url: "https://i.imgur.com/ZAA3Rmo.jpg", exif_data: "exif", user_id: 2, album_id: album.id})
    Photo.create({title: "testphoto6", url: "https://i.imgur.com/eqf5ycb.jpg", exif_data: "morestuff", user_id: 2, album_id: album.id})
  end
end
