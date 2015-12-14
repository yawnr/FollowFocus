class Api::TagsController < ApplicationController

  def index
    if params[:explore_tags]
      @tags = Tag.generate_explore_tags
      render json: @tags
    else
      @tags = Photo.find(params[:photo_id]).tags
      render 'index'
    end
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
