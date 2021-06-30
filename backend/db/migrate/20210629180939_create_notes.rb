class CreateNotes < ActiveRecord::Migration[6.1]
  def change
    create_table :notes do |t|
      t.string :title
      t.string :content
      t.integer :positionX
      t.integer :positionY

      t.timestamps
    end
  end
end
