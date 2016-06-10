class Status < ActiveRecord::Base
  belongs_to :user
  belongs_to :vehicle

  def self.update_status_vehicle(vehicle_id, status_params, current_user)
    v = Vehicle.find(vehicle_id)
    prev_status = v.status
    v.build_status(status_params)
    v.status.user = current_user
    prev_status.destroy #this is so I can query a User instance for it's statuses 
                        #and only get active statuses not every status they ever set
    Note.note_for_status(v.status)
  end

end
