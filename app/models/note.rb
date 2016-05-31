class Note < ActiveRecord::Base
  validates :content, length: { minimum: 2 }

  belongs_to :vehicle
  belongs_to :user

  def self.note_for_status(status)
    binding.pry
    user_name = User.find(status.user_id).name
    Note.create(content: "#{user_name} change status to #{status.vehicle_status}", vehicle_id: status.vehicle_id, user_id: status.user_id)
  end
end
