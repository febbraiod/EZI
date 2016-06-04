class UserStatusSerializer < ActiveModel::Serializer
  attributes :id, :user, :vehicle_id, :vehicle_name, :vehicle_stock, :vehicle_status, :created_at



  def vehicle_name()
    v = Vehicle.find(object.vehicle_id)
    "#{v.year} #{v.make} #{v.model} #{v.color}"
  end

  def vehicle_stock()
    v = Vehicle.find(object.vehicle_id)
    v.stock_no
  end

end
