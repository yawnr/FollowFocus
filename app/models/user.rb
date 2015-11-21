class User < ActiveRecord::Base

  validates :email, :username, :password_digest, :session_token, presence: true
  validates :email, format: { with: /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z]+)*\.[a-z]+\z/i,
    message: "address invalid." }
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :username, length: { minimum: 3, allow_nil: true }

  has_attached_file :profile_photo, styles: {medium: "300x300>", large_thumb: "200x200>", thumb: "100x100>"}, default_url: "logo2_lensonly.png"
  validates_attachment_content_type :profile_photo, content_type: /\Aimage\/.*\Z/

  after_initialize :ensure_session_token

  has_many :albums
  has_many :photos
  has_many :comments

  attr_reader :password, :profile_photo_content_type

  def self.find_by_credentials (username, password)
    # user = User.find_by_username(username)
    # will remove case sensitivity from user input on username
    user = User.where('lower(username) = ?', username.downcase).first

    if user
      return user if user.is_password?(password)
    else
      nil
    end

    nil
  end

  def password=(password)
    @password = password;
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def generate_token
    SecureRandom.urlsafe_base64(16);
  end

  def reset_token!
    self.session_token = generate_token
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= generate_token
  end

end
