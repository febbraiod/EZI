class StatusSerializer < ActiveModel::Serializer
  attributes :id, :user, :vehicle_id, :vehicle_status, :created_at

  def user
    if object.user_id
      User.find(object.user_id).name
    else
      "Unknown"
    end
  end

end
