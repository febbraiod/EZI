class Vehicle < ActiveRecord::Base
  validates :VIN, uniqueness: true

  def self.import(file, new_or_used)
    CSV.foreach(file.tempfile, headers: true, :header_converters => lambda { |h| h.try(:downcase).tr(" ", "_") }) do |row|
      vehicle_hash = row.to_hash
      vehicle_hash["new_or_used"] = new_or_used
      mappings = {"stock_#" => "stock_no", "colour" => "color", "drivetrain_desc" => "drive_train", "vin" => "VIN"}
      vehicle_hash.keys.each { |k| vehicle_hash[ mappings[k] ] = vehicle_hash.delete(k) if mappings[k] }
      Vehicle.create(vehicle_hash.except("dealerid", "dealer_name", "dealer_address", "dealer_city", 
      "dealer_region", "dealer_postal_code", "dealer_phone_number", "description", "series", "third_party_feature_codes", "video_url_duration",
      "video_url", "video_source_"))
    end
  end

end

