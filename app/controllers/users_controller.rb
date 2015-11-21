class UsersController < ApplicationController

  def new
    @user = User.new
    render :new
  end

  def create
    @user = User.new(user_params)

    if @user.save
      # UserMailer.welcome_email(@user).deliver_now
      login(@user)
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end

  def update
    @user = User.find_by_id(params[:id])
    @user.update!(user_params)
    render :show
  end

  def show
    @user = User.find_by_id(params[:id])
    render :show
  end

  private
  def user_params
    params.require(:user).permit(:email, :username, :password, :profile_photo)
  end


end
