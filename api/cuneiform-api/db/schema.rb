# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_08_04_010100) do

  create_table "canvases", force: :cascade do |t|
    t.string "name"
    t.string "music_id"
    t.text "description"
    t.integer "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_canvases_on_user_id"
  end

  create_table "comments", force: :cascade do |t|
    t.string "remark"
    t.integer "canvase_id", null: false
    t.integer "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["canvase_id"], name: "index_comments_on_canvase_id"
    t.index ["user_id"], name: "index_comments_on_user_id"
  end

  create_table "images", force: :cascade do |t|
    t.string "image_url"
    t.integer "canvase_id", null: false
    t.integer "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["canvase_id"], name: "index_images_on_canvase_id"
    t.index ["user_id"], name: "index_images_on_user_id"
  end

  create_table "likes", force: :cascade do |t|
    t.integer "canvase_id", null: false
    t.integer "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["canvase_id"], name: "index_likes_on_canvase_id"
    t.index ["user_id"], name: "index_likes_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "password"
    t.string "location"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "videos", force: :cascade do |t|
    t.string "video_url"
    t.integer "canvase_id", null: false
    t.integer "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["canvase_id"], name: "index_videos_on_canvase_id"
    t.index ["user_id"], name: "index_videos_on_user_id"
  end

  add_foreign_key "canvases", "users"
  add_foreign_key "comments", "canvases"
  add_foreign_key "comments", "users"
  add_foreign_key "images", "canvases"
  add_foreign_key "images", "users"
  add_foreign_key "likes", "canvases"
  add_foreign_key "likes", "users"
  add_foreign_key "videos", "canvases"
  add_foreign_key "videos", "users"
end
