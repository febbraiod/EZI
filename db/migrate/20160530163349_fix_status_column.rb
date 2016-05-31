class FixStatusColumn < ActiveRecord::Migration
  def change
    rename_column :statuses, :type, :status
  end
end
