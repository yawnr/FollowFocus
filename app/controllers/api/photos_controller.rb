class Api::PhotosController < ApplicationController

  before_filter :determine_scope

    def index
      if params[:gallery_photos]
        @photos = Photo.generate_gallery_photos
      elsif params[:album_covers]
        @photos = Photo.order(created_at: :desc).get_album_covers(params[:user_id].to_i)
      else
        @photos = @scope.order(created_at: :desc).all
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

    def destroy
      @photo = Photo.find(params[:photo_id])
      @photo.destroy!
      render 'show'
    end

    private
      def photo_params
        params.require(:photo).permit(:title, :album_id, :photo_attachment, :date_time,
                                      :lat, :lng, :aperture, :iso, :exposure_time,
                                      :width, :height, :orientation, :camera_model)
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
