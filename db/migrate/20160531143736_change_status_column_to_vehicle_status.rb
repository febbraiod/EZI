class ChangeStatusColumnToVehicleStatus < ActiveRecord::Migration
  def change
    rename_column :statuses, :status, :vehicle_status
  end
end
