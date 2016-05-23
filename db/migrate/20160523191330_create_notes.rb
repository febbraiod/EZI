class CreateNotes < ActiveRecord::Migration
  def change
    create_table :notes do |t|
      t.integer :user_id
      t.integer :vehicle_id
      t.text :content
      t.timestamps null: false
    end
  end
end