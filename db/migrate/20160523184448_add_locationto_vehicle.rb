class AddLocationtoVehicle < ActiveRecord::Migration
  def change
    add_column :vehicles, :storage, :string, :default => 'unset'
  end
end
