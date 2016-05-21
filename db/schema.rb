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

ActiveRecord::Schema.define(version: 20160520202816) do

  create_table "vehicles", force: :cascade do |t|
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
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
  end

end
