class Api::PhotosController < ApplicationController

    # def index
    #   @photos = Photo.all
    #   render 'index'
    # end

    def index
      @photos = Photo.current_album_photos(params[:album_id].to_i)
      render 'index'
    end

    def show
      @photo = Photo.find(params[:id])
      render 'show'
    end

    def create
      @photo = current_user.photos.create!(photo_params)
      render 'show'
    end

    def update
      @photo = Photo.find(params[:id])
      @photo.update!(photo_params)
      render 'show'
    end

    private

      def photo_params
        params.require(:photo).permit(:title, :exif_data, :album_id, :photo_attachment)
      end

end
