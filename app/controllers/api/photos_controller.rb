class Api::PhotosController < ApplicationController

  before_filter :determine_scope

    def index
      if params[:gallery_id]
        @photos = Photo.generate_gallery_photos
      else
        @photos = @scope.all
      end

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

    protected
      def determine_scope
        if params[:user_id]
          @scope = User.find(params[:user_id]).photos
        elsif params[:album_id]
          @scope = Album.find(params[:album_id]).photos
        else
          @scope = Photo
        end
      end

end
