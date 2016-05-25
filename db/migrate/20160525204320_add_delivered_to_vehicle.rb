class AddDeliveredToVehicle < ActiveRecord::Migration
  def change
    add_column :vehicles, :delivered, :boolean, default: false
  end
end
