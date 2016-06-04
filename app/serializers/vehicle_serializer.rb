class VehicleSerializer < ActiveModel::Serializer
  attributes :id, :stock_no, :year, :make, :model, :VIN, 
             :odometer, :msrp, :dealer_price, :color,
             :interior_color, :photo_url_list, :engine,
             :drive_train, :fuel, :body_type, :options,
             :transmission, :new_or_used, :storage, 
             :delivered, :invoice

  has_many :notes
  has_one :status, serializer: VehicleStatusSerializer

  def invoice
    if object.invoice
      object.invoice.url
    else
      'Invoice Not Attached'
    end
  end

end
