class Api::AlbumsController < ApplicationController

  def index
    @albums = Album.this_user_albums(params[:user_id].to_i)
    render 'index'
  end

  def show
    album = Album.find(params[:id])
    render json: album
  end

  def create
    album = Album.create!(album_params)
    render json: album
  end

  def update
    album = Album.find(params[:id])
    album.update!(album_params)
    render json: album
  end

  private

    def album_params
      params.require(:album).permit(:title, :description, :user_id)
    end

end
