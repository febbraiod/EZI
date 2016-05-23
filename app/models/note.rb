class Note < ActiveRecord::Base
  validates :content, length: { minimum: 2 }

  belongs_to :vehicle
  belongs_to :user
end
