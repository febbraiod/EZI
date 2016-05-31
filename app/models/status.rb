class Status < ActiveRecord::Base
  validates :vehicle_status, :inclusion => { :in => %w(Available Testdrive FandI Sold) }

  belongs_to :user
  belongs_to :vehicle
end
