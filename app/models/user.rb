class User < ActiveRecord::Base
  validates :name, presence: true
  
  enum role: [:guest, :user, :admin]

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many :notes
  has_many :notated_vehicles, through: :notes, source: :vehicle

  has_many :statuses
end
