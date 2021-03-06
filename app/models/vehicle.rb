class Vehicle < ActiveRecord::Base
  validates :VIN, uniqueness: true
  validates :storage, :inclusion => { :in => %w(on-lot off-lot unset) }
  validates :color, :length => { :maximum => 47 }

  before_validation :color_check

  has_attached_file :invoice, default_url: ':style/default_missing_invoice.png'
  validates_attachment_content_type :invoice, :content_type => ["image/jpg", "image/jpeg", "image/png", "image/gif"]


  has_many :notes
  has_many :note_authors, through: :notes, source: :user

  has_one :status
  has_one :status_setter, through: :status, source: :user

  def self.import(file, new_or_used)
    CSV.foreach(file.tempfile, headers: true, :header_converters => lambda { |h| h.try(:downcase).tr(" ", "_") }) do |row|
      vehicle_hash = row.to_hash
      vehicle_hash["new_or_used"] = new_or_used
      mappings = {"stock_#" => "stock_no", "colour" => "color", "drivetrain_desc" => "drive_train", "vin" => "VIN"}
      vehicle_hash.keys.each { |k| vehicle_hash[ mappings[k] ] = vehicle_hash.delete(k) if mappings[k] }
      vehicle_hash["photo_url_list"] = vehicle_hash["photo_url_list"].split(",")
      v = Vehicle.create(vehicle_hash.except("dealerid", "dealer_name", "dealer_address", "dealer_city", 
      "dealer_region", "dealer_postal_code", "dealer_phone_number", "description", "placeholder1","placeholder2","series", "third_party_feature_codes", "video_url_duration",
      "video_url", "video_source_", "video_source"))
      v.build_status(user_id: 1, vehicle_status: 'Available')
      v.save
    end
  end

  protected

  def color_check
    if color && color.length > 47
      c = color.delete(' ')
      c.slice! 0..47
    end
  end

end

