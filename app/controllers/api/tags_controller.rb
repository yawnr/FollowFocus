class Api::TagsController < ApplicationController

  def index
    @tags = Photo.find(params[:photo_id]).tags
  end

  def create
    tag = Tag.new(tag_params)
    tag.tag = tag.tag.strip
    tag.save!
    render json: tag
  end

  def destroy
    @tag = Tag.find(params[:id])
    @tag.destroy!
    render 'show'
  end

  private
  def tag_params
    params.require(:tag).permit(:tag, :photo_id)
  end

end
