class Api::AlbumsController < ApplicationController

  before_filter :determine_scope

  def index
    @albums = @scope.all
    render 'index'
  end

  def show
    album = Album.find(params[:id])
    render json: album
  end

  def create
    album = current_user.albums.create!(album_params)
    render json: album
  end

  def update
    album = Album.find(params[:id])
    album.update!(album_params)
    render json: album
  end

  private
    def album_params
      params.require(:album).permit(:title, :description)
    end

  protected
    def determine_scope
      @scope = if params[:user_id]
        User.find(params[:user_id]).albums
      else
        @scope = Album
      end
    end

end
