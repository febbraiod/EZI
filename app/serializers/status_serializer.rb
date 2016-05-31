class StatusSerializer < ActiveModel::Serializer
  attributes :id, :user, :vehicle_id, :vehicle_status

  def user
    if object.user_id
      User.find(object.user_id).name
    else
      "Unknown"
    end
  end

end
