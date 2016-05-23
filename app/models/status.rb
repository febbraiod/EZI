class Status < ActiveRecord::Base
  validates :storage, :inclusion => { :in => %w(Available Testdrive FandI Sold Delivered) }

  belongs_to :user
  belongs_to :vehicle
end
