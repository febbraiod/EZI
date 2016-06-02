class AddAttachmentInvoiceToVehicles < ActiveRecord::Migration
  def self.up
    change_table :vehicles do |t|
      t.attachment :invoice
    end
  end

  def self.down
    remove_attachment :vehicles, :invoice
  end
end
