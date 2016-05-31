class VehicleStatusSerializer < ActiveModel::Serializer
  attributes :id, :vehicle_status, :user

  def user
    if object.user_id
      User.find(object.user_id).name
    else
      "Unknown"
    end
  end

end
