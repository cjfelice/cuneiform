class CreateCanvases < ActiveRecord::Migration[6.0]
  def change
    create_table :canvases do |t|
      t.string :name
      t.string :music_id
      t.text :description
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
