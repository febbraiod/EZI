class User < ActiveRecord::Base
  validates :name, presence: true
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many :notes
  has_many :notated_vehicles, through: :notes, source: :vehicle

  has_many :statuses
end
