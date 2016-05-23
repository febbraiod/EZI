class CreateStatuses < ActiveRecord::Migration
  def change
    create_table :statuses do |t|
      t.string :type, :default => 'Available'
      t.integer :user_id
      t.integer :vehicle_id
      t.timestamps null: false
    end
  end
end
