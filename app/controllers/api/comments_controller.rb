class Api::CommentsController < ApplicationController

  def index
    @comments = Comment.this_photo_comments(params[:photo_id].to_i)
    render 'index'
  end

  def create
    comment = Comment.new(comment_params)
    comment.user_id = current_user.id
    comment.save!
    render json: comment
  end

  def destroy
    comment = Comment.find(params[:id])
    comment.destroy!
  end

  private
    def comment_params
      params.require(:comment).permit(:body, :photo_id)
    end

end
