class Status < ActiveRecord::Base
  validates :status, :inclusion => { :in => %w(Available Testdrive FandI Sold) }

  belongs_to :user
  belongs_to :vehicle
end
