class AddColumnToVehicles < ActiveRecord::Migration
  def change
    add_column :vehicles, :transmission, :string
    add_column :vehicles, :new_or_used, :string
  end
end
