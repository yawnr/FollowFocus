class Api::PhotosController < ApplicationController

    def index
      @photos = Photo.all
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

      def album_params
        params.require(:photo).permit(:title, :url, :exif_data)
      end

end
