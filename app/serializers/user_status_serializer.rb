class UserStatusSerializer < ActiveModel::Serializer
  attributes :id, :vehicle_id, :vehicle_status

  # def vehicle
  #   Vehicle.find(object.vehicle_id)
  # end

end
