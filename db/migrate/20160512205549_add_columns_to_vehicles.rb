class AddColumnsToVehicles < ActiveRecord::Migration
  def change
    add_column :vehicles, :stock_no, :integer
    add_column :vehicles, :year, :integer
    add_column :vehicles, :make, :string
    add_column :vehicles, :model, :string
    add_column :vehicles, :VIN, :string
    add_column :vehicles, :odometer, :integer
    add_column :vehicles, :msrp, :integer
    add_column :vehicles, :dealer_price, :integer
    add_column :vehicles, :color, :string
    add_column :vehicles, :interior_color, :string
    add_column :vehicles, :photo_url_list, :text
    add_column :vehicles, :engine, :string
    add_column :vehicles, :drive_train, :string
    add_column :vehicles, :fuel, :string
    add_column :vehicles, :body_type, :string
    add_column :vehicles, :options, :text
  end
end
