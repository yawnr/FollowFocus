class UserMailer < ApplicationMailer

  default from: 'welcome@followfocus.co'

  def welcome_email(user)
    @user = user
    @url = 'http://localhost:3000/session/new'
    mail(to: @user.email, subject: 'Welcome to FollowFocus')
  end
  
end
