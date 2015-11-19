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
      photo = Photo.find(params[:id])
      render json: photo
    end

    def create
      photo = Photo.create!(photo_params)
      render json: photo
    end

    def update
      photo = Photo.find(params[:id])
      photo.update!(photo_params)
      render json: photo
    end

    private

      def photo_params
        params.require(:photo).permit(:title, :url, :exif_data, :user_id, :album_id)
      end

end
