# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160602173658) do

  create_table "notes", force: :cascade do |t|
    t.integer  "user_id"
    t.integer  "vehicle_id"
    t.text     "content"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "statuses", force: :cascade do |t|
    t.string   "vehicle_status", default: "Available"
    t.integer  "user_id"
    t.integer  "vehicle_id"
    t.datetime "created_at",                           null: false
    t.datetime "updated_at",                           null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.string   "name"
    t.integer  "role",                   default: 0
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true

  create_table "vehicles", force: :cascade do |t|
    t.datetime "created_at",                             null: false
    t.datetime "updated_at",                             null: false
    t.integer  "stock_no"
    t.integer  "year"
    t.string   "make"
    t.string   "model"
    t.string   "VIN"
    t.integer  "odometer"
    t.integer  "msrp"
    t.integer  "dealer_price"
    t.string   "color"
    t.string   "interior_color"
    t.text     "photo_url_list"
    t.string   "engine"
    t.string   "drive_train"
    t.string   "fuel"
    t.string   "body_type"
    t.text     "options"
    t.string   "transmission"
    t.string   "new_or_used"
    t.string   "storage",              default: "unset"
    t.boolean  "delivered",            default: false
    t.string   "invoice_file_name"
    t.string   "invoice_content_type"
    t.integer  "invoice_file_size"
    t.datetime "invoice_updated_at"
  end

end
